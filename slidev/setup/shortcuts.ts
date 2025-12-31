import { defineShortcutsSetup } from '@slidev/types'
import type { NavOperations, ShortcutOptions } from '@slidev/types'

declare global {
  interface Window {
    __presenterZoom?: number
    __presenterPanX?: number
    __presenterPanY?: number
    __presenterZoomPanBound?: boolean
    __presenterToggleBound?: boolean
  }
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n))
}

function emit() {
  window.dispatchEvent(new CustomEvent('slidev:presenter-zoompan'))
}

function pathSegments(pathname = location.pathname) {
  return pathname.split('/').filter(Boolean)
}

function isPresenterPath(pathname = location.pathname) {
  return pathSegments(pathname).includes('presenter')
}

function isTypingTarget(el: EventTarget | null) {
  const t = el as HTMLElement | null
  if (!t) return false
  const tag = t.tagName?.toLowerCase()
  return tag === 'input' || tag === 'textarea' || (t as any).isContentEditable
}

function isTypingNow() {
  return isTypingTarget(document.activeElement)
}

/**
 * Toggle between:
 *   /<base>/<slideNo>            <->  /<base>/presenter/<slideNo>
 * Preserves query + hash.
 */
function goPresenter(toggle = true) {
  const url = new URL(location.href)
  const segs = pathSegments(url.pathname)

  // Find slide number segment (e.g. "1")
  const slideIdx = segs.findIndex(s => /^\d+$/.test(s))

  // If we can't find a slide number, assume slide "1"
  if (slideIdx === -1) {
    const base = segs.filter(s => s !== 'presenter')
    const next = toggle && segs.includes('presenter')
      ? [...base] // exit presenter
      : [...base, 'presenter', '1'] // enter presenter

    url.pathname = `/${next.join('/')}`
    location.assign(url.toString())
    return
  }

  // We are in presenter mode if the segment right before the slide number is "presenter"
  const isInPresenter = slideIdx > 0 && segs[slideIdx - 1] === 'presenter'

  // Base path is everything before either the slide number (normal) or "presenter" (presenter)
  const base = isInPresenter
    ? segs.slice(0, slideIdx - 1)
    : segs.slice(0, slideIdx)

  const slideNo = segs[slideIdx]

  const next = toggle && isInPresenter
    ? [...base, slideNo] // exit => /<base>/<slideNo>
    : [...base, 'presenter', slideNo] // enter => /<base>/presenter/<slideNo>

  url.pathname = `/${next.join('/')}`
  location.assign(url.toString())
}

export default defineShortcutsSetup((_nav: NavOperations, base: ShortcutOptions[]) => {
  // Presenter zoom/pan bindings (your existing behavior)
  if (!window.__presenterZoomPanBound) {
    window.__presenterZoomPanBound = true

    if (window.__presenterZoom == null) window.__presenterZoom = 1
    if (window.__presenterPanX == null) window.__presenterPanX = 0
    if (window.__presenterPanY == null) window.__presenterPanY = 0

    const zoomStep = 0.1
    const panStep = 40

    window.addEventListener(
      'keydown',
      (e) => {
        if (!isPresenterPath()) return
        if (isTypingTarget(e.target)) return

        let handled = false

        // Zoom in: "=" key (code Equal), "+" is Shift+"=" on many layouts (still Equal)
        if (e.code === 'Equal') {
          window.__presenterZoom = clamp((window.__presenterZoom ?? 1) + zoomStep, 0.5, 3)
          handled = true
        }

        // Zoom out: "-" key (code Minus)
        if (e.code === 'Minus') {
          window.__presenterZoom = clamp((window.__presenterZoom ?? 1) - zoomStep, 0.5, 3)
          handled = true
        }

        // Reset: "0"
        if (e.code === 'Digit0') {
          window.__presenterZoom = 1
          window.__presenterPanX = 0
          window.__presenterPanY = 0
          handled = true
        }

        // Pan: Shift + Arrow keys
        if (e.shiftKey && e.code === 'ArrowLeft') {
          window.__presenterPanX = (window.__presenterPanX ?? 0) - panStep
          handled = true
        }
        if (e.shiftKey && e.code === 'ArrowRight') {
          window.__presenterPanX = (window.__presenterPanX ?? 0) + panStep
          handled = true
        }
        if (e.shiftKey && e.code === 'ArrowUp') {
          window.__presenterPanY = (window.__presenterPanY ?? 0) - panStep
          handled = true
        }
        if (e.shiftKey && e.code === 'ArrowDown') {
          window.__presenterPanY = (window.__presenterPanY ?? 0) + panStep
          handled = true
        }

        if (handled) {
          e.preventDefault()
          emit()
        }
      },
      { capture: true },
    )
  }

  // NEW: Shift+P toggles presenter mode via route switching
  if (!window.__presenterToggleBound) {
    window.__presenterToggleBound = true

    window.addEventListener(
      'keydown',
      (e) => {
        if (isTypingTarget(e.target) || isTypingNow()) return
        if (!(e.shiftKey && e.code === 'KeyP')) return

        e.preventDefault()
        goPresenter(true)
      },
      { capture: true },
    )
  }

  // Keep Slidev defaults intact
  return [...base]
})
