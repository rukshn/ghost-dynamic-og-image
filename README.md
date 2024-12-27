## GHOST BLOG Open Graph Image Generator

⚠️ This is not a standalone plugin that works out of the box, some configuration is required. This has to be incoporated together with a dynamic image generator I build for general purpose.

### Before installation

- Make sure that `you have disabled the default gradient background`
- Get the automatic image generator setup for your website, I'm happy to setup my image generation API that I am using for my blog for your website or blog, reach out rukshan[at]ruky[me]

### How to install

- Clone the repository
- Copy the `ghost_og.js` file to the `helpers` folder of your Ghost installation
- Replace the parameters of the `domain_name` and `blog_name` with the parameters provided by the image generation service
- Add `{{ghost_og}}` as a handlebar tag above `{{ghost_head}}` this is important because `og` tags should appear within the first 300 bytes of a webpage
- Restart Ghost blog `ghost restart`
- Refresh the page to see the `<og:image` tag included in the blog source
