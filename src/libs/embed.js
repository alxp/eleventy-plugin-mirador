
module.exports = async (id, manifestUrl, config) => {
  try {
    const appScriptTag = `<script src="${config.miradorAppUrl}"></script>`;
    const wrapperDivTag = `<div id="box" style="position: relative;">
    <div id="bounding-box" style="height:800px;"></div>
    <div id="${id}"></div></div>`;

const windowConfig = JSON.stringify(config.window);

    const scriptTag =`
<script type="text/javascript">
  // Extract the 'page' query parameter
  var urlParams = new URLSearchParams(window.location.search);
  var page = urlParams.get('page');
  var canvasIndex = null;
  if (page !== null) {
    canvasIndex = parseInt(page, 10);
    if (isNaN(canvasIndex)) {
      canvasIndex = null; // Ignore invalid values
    }
  }

  // Build the windows configuration dynamically
  var windowsConfig = [{
    "loadedManifest": "${manifestUrl}",
    "thumbnailNavigationPosition": 'far-bottom'
  }];

  // Add canvasIndex if the page parameter is valid
  if (canvasIndex !== null) {
    windowsConfig[0].canvasIndex = canvasIndex;
  }

  // Initialize Mirador with the dynamic configuration
  var mirador = Mirador.viewer({
    "id": "${id}",
    "manifests": {
      "${manifestUrl}": {
        "provider": "${config.provider}"
      }
    },
    "window": ${windowConfig},
    "windows": windowsConfig
  }, window.miradorPlugins || {} );
</script>`;

    return appScriptTag + wrapperDivTag + scriptTag;

  } catch (error) {
    console.error(error);
  }


};
