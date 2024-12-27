## GHOST BLOG Open Graph Image Generator

⚠️ This is not a standalone plugin that works out of the box. This has to be incoporated together with a dynamic image generator I build for general purpose.

### Before installation

- Make sure that `you have disabled the default gradient background`
- Get the automatic image generator setup, reach out for more details

### How to install

- Clone the repository
- Copy the `ghost_og.js` file to the `helpers` folder of your Ghost installation
- Replace the parameters of the `domain_name` and `blog_name` with the parameters provided by the image generation service
- Restart Ghost blog `ghost restart`
- Refresh the page to see the `<og:image` tag included in the blog source
