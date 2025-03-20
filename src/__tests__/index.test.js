const deepmerge = require('deepmerge');
const asyncReplace = require('string-replace-async');
const embed = require('../libs/embed');
const defaultconfig = require('../libs/defaultconfig');


/*
 *  Make sure we reset the regex index on every test.
 */





describe('Mirador page test', () => {
  const testManifest = 'https://iiif.lib.harvard.edu/manifests/drs:48309543';

    test('Embed with default configuration', async () => {
        await expect(embed("my-mirador", testManifest,  defaultconfig)).resolves.toContain(
            '<div id="my-mirador">',
        );
    });



});
