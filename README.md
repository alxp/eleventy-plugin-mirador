#  eleventy-plugin-mirador

11ty plugin for embedding a [Mirador](https://projectmirador.org) IIIF viewer app.

Developed as part of the [Islandty](https://github.com/alxp/islandty) project.

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
  miradorAppUrl: "https://unpkg.com/mirador@latest/dist/mirador.min.js",
  canvasIdPattern: "{manifestUrl}/canvas/{canvasIndex}",
  window: {
    sideBarPanel: 'info',
  },
  windows: [
    {
      thumbnailNavigationPosition: "far-bottom"
    }
  ]
});
```

The `window` and `windows` keys get passed directly to the Mirador instantiation JavaScript function.
Currently this plugin assumes only a single manifest is loaded in a given instance.

To see the available configuration options you can go to https://github.com/ProjectMirador/mirador/blob/main/src/config/settings.js.

* `miradorAppUrl` — Where the browser will load the Mirador app from. Defaults to the official Mirador unpkg CDN URL.

* `canvasIdPattern` — A string pattern for constructing canvas IDs from the `?page=N` query parameter.
  `{manifestUrl}` and `{canvasIndex}` are replaced at runtime. Defaults to `"{manifestUrl}/canvas/{canvasIndex}"`,
  which matches the convention used by biiif and many other IIIF manifest generators.

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/alxp/eleventy-plugin-mirador/issues).

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE.md)

##  Maintainer

Alexander O'Neill - https://github.com/alxp
