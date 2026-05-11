const embedMirador = require("../");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(embedMirador);
  return { dir: { input: "." } };
};
