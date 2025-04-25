module.exports = {
    miradorAppUrl: "https://roblib.github.io/mirador-integration-islandora/islandora-mirador-0.1.0.js",
    provider: "Eleventy",
  annotation: {
    adapter: (canvasId) => new LocalStorageAdapter(`localStorage://?canvasId=${canvasId}`),
  },
    window: {
      defaultSideBarPanel: 'annotations',
    },
    windows: [
        {
        imageToolsEnabled: true,
            thumbnailNavigationPosition: "far-bottom"
        }
    ]
},
enabledPlugins = [];
