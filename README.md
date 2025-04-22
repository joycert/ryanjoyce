# Ryan Joyce - Personal Website

This is my personal website. I wanted the simplest possible tech stack that would allow me to write fun little blog posts in markdown. I chose to use 11ty becasue it fits the need, is fast, and well documented. Feel free to use this as a template for your own personal site- I think everyone should have one.

I'm gonna let chatGPT tell you how to do that below-

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/ryanjoyce.git
cd ryanjoyce
```

1.5. Delete all my markdown files- unless you want to pretend you're me. Trust me though it's not that great. Go ahead and pretend to be someone else like Chris Hemsworth or your recently deceased elderly neighbor who you found and hid in the forest so you can keep collecting those social security checks and voting for your canidate of choice (twice!).

2. Install dependencies:

```bash
npm install
```

### Development

To start the development server:

```bash
npm start
```

This will:

- Start the Eleventy development server on port 3000
- Watch for CSS changes and rebuild Tailwind

### Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be available in the `_site` directory.

## Project Structure

- `src/` - Source files
  - `assets/` - Static assets (CSS, images, etc.)
  - `_includes/` - Eleventy templates and components
  - `_layouts/` - Page layouts
  - `_data/` - Site data and configuration

## Technologies Used

- [Eleventy](https://www.11ty.dev/) - Static site generator
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PostCSS](https://postcss.org/) - CSS processing
- [Markdown-it](https://github.com/markdown-it/markdown-it) - Markdown parsing

## Extra Credit

Setup a github action so that whenever you push to main your website is recompiled and rehosted on your server. It's now easier for me to post to my website than to instagram which I love.
