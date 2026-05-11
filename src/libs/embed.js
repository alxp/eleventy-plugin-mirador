module.exports = async (id, manifestUrl, config) => {
  try {
    const appScriptTag = `<script src="${config.miradorAppUrl}"></script>`;
    const wrapperDivTag = `<div id="box" style="position: relative;">
    <div id="bounding-box" style="height:800px;"></div>
    <div id="${id}"></div></div>`;

    const windowConfig = JSON.stringify(config.window);

    const scriptTag = `
<script type="text/javascript">
  // Extract the 'page' query parameter
  var urlParams = new URLSearchParams(window.location.search);
  var page = urlParams.get('page');
  var canvasId = null;
  if (page !== null) {
    var canvasIndex = parseInt(page, 10);
    if (!isNaN(canvasIndex)) {
      canvasId = ${JSON.stringify(config.canvasIdPattern)}
        .replace("{manifestUrl}", "${manifestUrl}")
        .replace("{canvasIndex}", canvasIndex);
    }
  }

  // Build the windows configuration dynamically
  var windowsConfig = [{
    manifestId: "${manifestUrl}",
    thumbnailNavigationPosition: 'far-bottom'
  }];

  // Add canvasId if the page parameter is valid
  if (canvasId !== null) {
    windowsConfig[0].canvasId = canvasId;
  }

  // Initialize Mirador with the dynamic configuration
  var mirador = Mirador.viewer({
    id: "${id}",
    window: ${windowConfig},
    windows: windowsConfig
  }, window.miradorPlugins || {});
</script>`;

    return appScriptTag + wrapperDivTag + scriptTag;

  } catch (error) {
    console.error(error);
  }
};
