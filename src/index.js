const deepmerge = require('deepmerge');

const asyncReplace = require('string-replace-async');
const defaults = require('./libs/defaultconfig');
const embed = require('./libs/embed.js');

module.exports = (eleventyConfig, options = {}) => {
    const config = deepmerge(defaults, options);


    eleventyConfig.addAsyncShortcode('mirador', async (manifestUrl) => {
        return await embed('my-mirador', manifestUrl, config);
    });

};
