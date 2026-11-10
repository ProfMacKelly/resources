# Business & The Constitution — remark.js

## Preview on Windows
1. Extract the ZIP completely. Keep its folders together.
2. Double-click `index.html` to open it in Edge or Chrome. No installation or server is needed. Remark, Mermaid, and fonts are bundled locally. Poll links require internet access.
3. Right arrow/Space advances; Left arrow goes back; H opens help; P toggles presenter mode; C opens a cloned display; F toggles full screen. Browser permissions may affect popups/fullscreen.

Alternative local server (if Python is installed): open PowerShell in this folder, run `py -m http.server 8000 --bind 127.0.0.1`, and visit http://localhost:8000/. Stop with Ctrl+C.

## Publish on GitHub Pages
Copy this folder's contents to a new folder such as `remark/business-constitution/` inside the folder your repository publishes. Commit and push. If your repository already publishes a branch/folder, use that existing location. If it publishes through an Actions workflow, ensure that workflow copies these files into its published artifact. No Node build is required for this package.

For a resources repository configured to publish these files, the URL would be https://profmackelly.github.io/resources/remark/business-constitution/ . Do not overwrite the repository root's existing index.html.

## Edit
`slides.md` is the converted Markdown. After edits, run `py sync-slides.py` in PowerShell to update the embedded copy in `index.html`; then refresh the browser. Alternatively edit the textarea in index.html directly (do not then sync from an older slides.md). Styling is in assets/slides.css.

`---` separates slides. `--` reveals the following content on the same slide. Speaker notes can be added after a line containing `???` within a slide. This source contained no identifiable speaker notes.

## Appearance and CSS recommendations
The default retains the source's Solarized Light colors, blue accent, and 16:10 ratio. Exact visual parity cannot be established without a screenshot or rendered original. Inter and IBM Plex Mono come from your supplied fonts.css, including embedded font data and license notices.

For a site-colored variant open `index.html?theme=site` (append ?theme=site to the hosted URL, or the localhost URL). This uses the blue, white, and dark text colors from your site CSS. For a direct local-file preview you can instead change the body tag to `<body class="site-palette">`.

Do not link all the uploaded CSS files into the slideshow: styles.css and styles-bk.css style exercise layouts and global SVG elements; editor.css styles the editor; theme(1).css applies broader site rules. Those rules could interfere with remark, Mermaid, and presenter mode. originals/ retains all inputs unchanged for reference; only fonts.css is loaded directly. No site navigation header was added inside slides because it would reduce slide space and alter the deck.

## Adaptations and missing material
- 11 original slides remain in order. The two step markers become two incremental states (13 rendered states overall). The markers followed the second item; interpreted as revealing that item on the next advance.
- `!toc` becomes an agenda with links to named slides. It is static; update it if you change slide structure.
- Both `!poll` directives become working external poll links with their original question text and URLs. Native embedded poll behavior is unknown; no results or votes are fabricated. Links are used because external sites can prohibit iframe embedding.
- Slide 10 references `assets/paste-1788966078205.png`, which was not attached. A clearly labeled placeholder occupies that slide. Add that exact PNG to assets/, replace the placeholder in slides.md with the original image syntax shown in its comment, and run sync-slides.py. The original diagram cannot be reconstructed reliably from its filename.
- Slide 11's Mermaid source is retained and rendered with bundled Mermaid. Its cluster and nodes remain intact. The source also contains the incomplete reference `!ref[#### ]`; it is shown literally and highlighted because no destination is provided. Replace it with a real slide link once the target is known.
- Frontmatter theme settings become remark configuration/CSS rather than a visible slide. The generic metadata title “My Presentation” and date “2026” remain in the untouched original file; the browser title uses the deck's actual heading.
- Wording, including apparent typos in the hypotheticals, was preserved. No legal editing was performed.

## Files and third-party software
index.html: ready to view; slides.md: editable content; assets/: slide CSS, fonts, Mermaid source; vendor/: remark 0.15.0 and Mermaid 10.9.3; originals/: untouched uploads; sync-slides.py: optional edit helper.

Remark: https://github.com/gnab/remark (MIT). Mermaid: https://github.com/mermaid-js/mermaid (MIT). Fonts: supplied fonts.css includes SIL Open Font License notices. Third-party licenses are included in vendor/.

## Validation
The package was checked for JavaScript syntax, embedded Markdown synchronization, slide/reveal counts, remark rendering and navigation in a DOM environment, Mermaid syntax, local dependency links, and byte-for-byte preservation of original uploads. Full browser visual verification was unavailable because the browser download failed in this environment; please review the deck in Edge or Chrome before presenting, especially the Mermaid slide.
