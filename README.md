# Astro Instructions

Install dependencies:

```sh
npm install
```

For local environment: 

```sh
npm run dev
```

For production environment:

```sh
npm run build
```
## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── components/
│       └── layout/
│   └── composables/
│   └── layouts/
│   └── pages/
│       │
│       └── product/
│       │
│       └── products/
└── package.json
```

Here's a brief description you can use for your README file to describe the structure of the folders:

---

### Project Structure

- **`/public/`**: Contains static assets like images, fonts, and other files that are served directly by the server. This folder is accessible publicly.

- **`/src/`**: The main source directory where all the application code resides.
    - **`/src/components/`**: Contains reusable Vue components that can be used throughout the application.
        - **`/src/components/layout/`**: Components specifically related to layout structure, such as headers, footers, and navigation bars.

    - **`/src/composables/`**: Contains reusable logic or composition functions (e.g., custom hooks) that can be shared across multiple components.

    - **`/src/layouts/`**: Layout components that define the general structure of different pages, often used to wrap the content of pages.

    - **`/src/pages/`**: Contains pages of the application.
        - **`/src/pages/product/`**: Specific to individual product related page.
        - **`/src/pages/products/`**: Contains components for pages displaying lists or collections of products.

- **`package.json`**: Defines project metadata, dependencies, scripts, and other configurations needed for building and running the project.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
