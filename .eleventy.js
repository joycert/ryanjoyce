const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const Image = require("@11ty/eleventy-img");
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

  // Image optimization
  eleventyConfig.addAsyncShortcode(
    "image",
    async function (src, alt, sizes = "100vw") {
      if (alt === undefined) {
        throw new Error(`Missing \`alt\` on responsive image from: ${src}`);
      }

      // Get the directory of the current page
      const page = this.page;
      const pageDir = path.dirname(page.inputPath);

      // Construct the full path to the image
      const fullSrc = path.join(pageDir, src);

      let metadata = await Image(fullSrc, {
        widths: [300, 600, 900, 1200],
        formats: ["webp", "jpeg"],
        outputDir: "./_site/assets/images/",
        urlPath: "/assets/images/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
      };

      return Image.generateHTML(metadata, imageAttributes);
    }
  );

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
