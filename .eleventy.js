const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const path = require("path");

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

  // Simplified image filter that just returns the path
  eleventyConfig.addFilter("processImage", function (src) {
    // If it's a relative path, make it absolute from the post directory
    if (src.startsWith("./")) {
      // Extract the post name from the input file path (removing the .md extension)
      const postName = path.basename(this.page.inputPath, ".md");
      return `/assets/images/${postName}/${src.substring(2)}`;
    }
    return src;
  });

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
