# Studies De Jure theme

fonts.css and theme.css are copied unchanged from the exercises site. site-theme.css adapts the banner to documents and presentation renderers.

First-party HTML pages load all three stylesheets after their existing styles. Relative asset paths account for nested folders. HTML exports must retain these links, the sdj body classes, and the banner when regenerated. Existing slide content and scripts are preserved.

Slidev uses its native global-top.vue and styles/index.css entry points. Embedded fonts require no remote font service. The banner image and sourcebook link match the exercises theme.

Third-party documentation, dependencies, saved embed frames, and archived backups are excluded.
