# Contributing to Urban Food Finds

Thank you for your interest in contributing to Urban Food Finds! We're excited to have you join our community of food explorers.

## How to Contribute

We welcome contributions in several forms:

*   **Adding New Restaurants:** Share your favorite local spots.
*   **Writing Blog Posts:** Share food stories, reviews, or culinary tips.
*   **Reporting Issues:** Let us know about bugs or suggestions for improvement.
*   **Improving Documentation:** Help us make our guides clearer and more comprehensive.

## Adding a New Restaurant

To add a new restaurant, you'll need to create a Markdown file in the `src/content/restaurants/` directory.

1.  **File Naming:** Use a descriptive name for the file, e.g., `my-favorite-diner.md`.
2.  **Frontmatter:** Each restaurant file must start with a YAML frontmatter block. Here's a template:

    ```yaml
    ---
    layout: ../../layouts/RestaurantPage.astro
    name: "Restaurant Name"
    cuisine: "Type of Cuisine (e.g., Italian, Mexican, Indian)"
    location: "Full Address or General Area"
    image: "/images/restaurants/your-restaurant-image.jpg" # Path to an image in public/images/restaurants/
    # Optional: Add a short description for a quick preview
    # description: "A brief teaser about the restaurant."
    ---

    Detailed information about the restaurant goes here. You can use Markdown to format your text.
    Share what makes this place special, recommended dishes, ambiance, etc.
    ```

3.  **Image Guidelines:**
    *   Place images in the `public/images/restaurants/` directory. Create this directory if it doesn't exist.
    *   Use descriptive filenames for images (e.g., `luigis-pizzeria-exterior.jpg`).
    *   Optimize images for the web to ensure fast loading times.

## Writing a New Blog Post

To add a new blog post, create a Markdown file in the `src/content/blog/` directory.

1.  **File Naming:** Use a descriptive name, e.g., `my-food-adventure.md`.
2.  **Frontmatter:** Each blog post must start with a YAML frontmatter block. Here's a template:

    ```yaml
    ---
    layout: ../../layouts/BlogPost.astro
    title: "Your Blog Post Title"
    description: "A brief summary of your blog post (for SEO and previews)."
    pubDate: "YYYY-MM-DD" # Publication date
    tags: ["tag1", "tag2", "relevant-keywords"] # Add relevant tags
    # Optional: Add an author
    # author: "Your Name"
    # Optional: Add a hero image for the post
    # heroImage: "/images/blog/your-post-image.jpg"
    draft: false # Set to true if it's a work in progress
    ---

    Your blog post content goes here. Use Markdown to write your article.
    Share your insights, stories, reviews, or recipes!
    ```

3.  **Image Guidelines (for blog posts):**
    *   Place images in the `public/images/blog/` directory. Create this directory if it doesn't exist.
    *   Use descriptive filenames.

## Submitting Changes

1.  Fork the repository.
2.  Create a new branch for your changes (`git checkout -b my-awesome-contribution`).
3.  Make your changes and commit them with clear messages.
4.  Push your branch to your fork.
5.  Open a Pull Request against the main repository.

We look forward to your contributions!
