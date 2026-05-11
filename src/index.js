const defaults = require('./libs/defaultconfig');
const embed = require('./libs/embed.js');

module.exports = (eleventyConfig, options = {}) => {
    const config = { ...defaults, ...options, window: { ...defaults.window, ...options.window } };

    eleventyConfig.addAsyncShortcode('mirador', async (id, manifestUrl) => {
        return await embed(id, manifestUrl, config);
    });
};
