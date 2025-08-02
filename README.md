# Urban Food Finds: Your Local Foodie Guide

Urban Food Finds is a community-driven platform to discover and share local culinary gems. Explore restaurants, read honest reviews, and find your next favorite meal!

This project is built with [Astro](https://astro.build/).

## Features

*   Browse featured restaurants and detailed restaurant pages.
*   Read blog posts about food trends, local eateries, and culinary experiences.
*   Responsive design for browsing on any device.

## Project Structure

*   `public/`: Static assets (images, favicon).
    *   `public/images/restaurants/`: Images for restaurant pages.
    *   `public/images/blog/`: Images for blog posts.
*   `src/`: Source code.
    *   `src/content/blog/`: Markdown files for blog posts.
    *   `src/content/restaurants/`: Markdown files for restaurant details.
    *   `src/layouts/`: Astro layout components (e.g., `Layout.astro`, `BlogPost.astro`, `RestaurantPage.astro`).
    *   `src/pages/`: Astro pages (e.g., `index.astro`, `about.astro`, `blog/index.astro`).
*   `astro.config.mjs`: Astro configuration file.
*   `package.json`: Project dependencies and scripts.
*   `tailwind.config.mjs`: Tailwind CSS configuration.

## Getting Started

### Prerequisites

*   Node.js (version recommended by Astro, typically latest LTS)
*   npm (or yarn, pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://your-repository-url/urban-food-finds.git
    # Replace with the actual repository URL
    cd urban-food-finds
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or yarn install, or pnpm install
    ```

### Running the Development Server

To start the development server and view the site locally:

```bash
npm run dev
# or yarn dev, or pnpm dev
```

This will typically start the server on `http://localhost:4321`.

### Building for Production

To build the site for production:

```bash
npm run build
# or yarn build, or pnpm build
```

The output will be in the `dist/` directory.

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for detailed guidelines on how to add new content, report issues, and submit changes.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details (if one exists, otherwise assume MIT or specify).
