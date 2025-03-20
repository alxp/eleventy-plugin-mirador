
module.exports = async (id, manifestUrl, config) => {
  try {
    const appScriptTag = `<script src="${config.miradorAppUrl}"></script>`;
    const wrapperDivTag = `<div id="box" style="position: relative;">
    <div id="bounding-box" style="height:800px;"></div>
    <div id="${config.id}"></div></div>`;

const windowConfig = JSON.stringify(config.window);

    const scriptTag =`
<script type="text/javascript">
    var mirador = Mirador.viewer({
      "id": "${config.id}",
      "manifests": {
        "${manifestUrl}": {
          "provider": "${config.provider}"
        }
      },
"window": ${windowConfig},
      "windows": [
        {
          "loadedManifest": "${manifestUrl}",
          "thumbnailNavigationPosition": 'far-bottom'
        }
      ]
    }, window.miradorPlugins || {} );
    </script>`;

    return appScriptTag + wrapperDivTag + scriptTag;

  } catch (error) {
    console.error(error);
  }


};
