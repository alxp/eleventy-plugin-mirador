#  eleventy-plugin-mirador

11ty plugin for embedding a [Mirador](https://projectmirador.org) IIIF viewer app.

## Getting started


This is a plugin for [Eleventy](https://www.11ty.dev/) which instantiates a Mirador viewer for the given manifest.

## Setup

Add the plugin to your Eleventy project:

I haven't submitted this project to npm yet
so for now you can require it using
the github shorthand in your package.json:

```json
  "dependencies": {
    ...
    "eleventy-plugin-mirador": "github:alxp/eleventy-plugin-mirador#main",
```

Then add it to your [Eleventy config](https://www.11ty.dev/docs/config/) file:

```js
const embedMirador = require("eleventy-plugin-mirador");

module.exports = function(eleventyConfig) {
    ...
    eleventyConfig.addPlugin(embedMirador);
    ...
};
```

To embed a Mirador viewer onto any Markdown page, use the [shortcode](https://www.11ty.dev/docs/shortcodes/) `mirador` and
supply an id string and manifest URL as parameters

### Markdown example:

```markdown
Here is Mirador with an example IIIF manifest from Harvard:

{% mirador "my-mirador","https://iiif.lib.harvard.edu/manifests/drs:48309543" %}

```

### Rendered result
![Screenshot of Mirador with sample IIIF manifest](/docs/eleventy-plugin-mirador_screenshot_1.png)

## Advanced usage

### Configurations
The following optional configurations can be used to alter the behaviour of this plugin. To change the configuration, set the target config object when adding the plugin in your eleventy config:

```js
eleventyConfig.addPlugin(embedMirador, {
  miradorAppUrl: "https://roblib.github.io/mirador-integration-islandora/islandora-mirador-0.1.0.js",

    provider: "Eleventy",
    window: {

    },
    windows: [
        {
            canvasIndex: 0,
            thumbnailNavigationPosition: "far-bottom"
        }
    ]

});
```

The window and windows keys get passed directly to the Mirador
instantiation Javascript function.

Currently this plugin assumes only a single manifest is loaded in
a given instance.

To see the available configuration options
you can go to https://github.com/ProjectMirador/mirador/blob/main/src/config/settings.js.
They are not otherwise very well-documented as of this
writing.

* miradorAppUrl
  Where the browser wil load the Mirador app instance from.
  The default option is to use the Mirador instance
  compiled for the [Islandora](https://islandora.ca/) project
  hosted at https://github.com/roblib/mirador-integration-islandora.

  This app instance is compiled with the following plugins:
  - Embedded Text
  - Image Tools
  Which can be enabled in this plugin.
  For example, to enable the embedded text plugin, supply
  the following config to the plugin:

```js
eleventyConfig.addPlugin(miradorPlugin, {window: {
    textOverlay: {
      enabled: true,
      selectable: true,
      visible: false
    },
}});

```

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/alxp/eleventy-plugin-mirador/issues).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)
