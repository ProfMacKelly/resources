<!-- components/PresenterZoom.vue -->
<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useNav } from '@slidev/client'

const { isPresenter } = useNav()

type ZoomState = { zoom: number; panX: number; panY: number }

function readState(): ZoomState {
  return {
    zoom: window.__presenterZoom ?? 1,
    panX: window.__presenterPanX ?? 0,
    panY: window.__presenterPanY ?? 0,
  }
}

const state = ref<ZoomState>(readState())

function onZoomPanEvent() {
  state.value = readState()
}

onMounted(() => {
  // initialize if absent
  if (window.__presenterZoom == null) window.__presenterZoom = 1
  if (window.__presenterPanX == null) window.__presenterPanX = 0
  if (window.__presenterPanY == null) window.__presenterPanY = 0

  window.addEventListener('slidev:presenter-zoompan', onZoomPanEvent as any)
})

onBeforeUnmount(() => {
  window.removeEventListener('slidev:presenter-zoompan', onZoomPanEvent as any)
})

const styleObj = computed(() => {
  const { zoom, panX, panY } = state.value
  return {
    transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
  } as Record<string, string>
})
</script>

<template>
  <div class="relative w-full h-full overflow-visible">
    <div
      v-if="isPresenter"
      class="fixed right-0 top-0 z-50 rounded px-1 py-1 text-xs bg-black/60 text-white select-none pointer-events-none"
    >
      <span class="ml-0 opacity-80">(+/- , Shift+Arrows, 0)</span>
    </div>

    <div class="origin-top-left inline-block overflow-visible" :style="styleObj">
      <slot />
    </div>
  </div>
</template>
