module.exports = {
    miradorAppUrl: "https://roblib.github.io/mirador-integration-islandora/islandora-mirador-0.1.0.js",
    id: "my-mirador",
    provider: "Eleventy",
    window: {
        textOverlay: {
            enabled: true,
            selectable: true,
            visible: false
        },
    },
    windows: [
        {
            canvasIndex: 0,
            thumbnailNavigationPosition: "far-bottom"
        }
    ]
};
