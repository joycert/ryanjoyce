const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  // Configure markdown-it
  const markdownLib = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  }).use(markdownItAnchor);

  // Set the markdown library
  eleventyConfig.setLibrary("md", markdownLib);

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
