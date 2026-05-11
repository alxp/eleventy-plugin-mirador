const embed = require('../libs/embed');
const defaultconfig = require('../libs/defaultconfig');

describe('Mirador page test', () => {
  const testManifest = 'https://iiif.lib.harvard.edu/manifests/drs:48309543';

  test('Embed with default configuration', async () => {
    const result = await embed("my-mirador", testManifest, defaultconfig);

    expect(result).toContain('<div id="my-mirador">');

    // M4: manifestId instead of loadedManifest
    expect(result).toContain('manifestId');
    expect(result).not.toContain('loadedManifest');

    // M4: canvasId instead of canvasIndex as a config property
    expect(result).toContain('.canvasId');
    expect(result).not.toContain('.canvasIndex');

    // M4: no manifests or provider blocks
    expect(result).not.toContain('"manifests"');
    expect(result).not.toContain('"provider"');
  });
});
