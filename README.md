# Fancy Notes!

This is a site collecting useful notes about anything you are finding. It is more than just a note-taking site. It’s a community of learners and doers who value useful notes and want to improve their skills and knowledge. Whether you’re a student, a professional, a hobbyist, or just someone who enjoys learning new things, this site is for you. Join [us](https://github.com/AREA44/fancy-notes) today and start collecting some notes about useful notes!

Fancy Notes is built using [Fumadocs](https://fumadocs.dev) - a simple, powerful and flexible site generation framework with everything you love from Next.js.

## Local development

```bash
git clone --depth=1 https://github.com/AREA44/fancy-notes
cd fancy-notes
pnpm install
pnpm run dev
```

Now the site live at http://localhost:3000

## Creating a Note

To create a new note in Fancy Notes, follow these steps:

1. Navigate to the `content` directory in the project's root folder.
2. Create a new `.mdx` file with a unique name for your note.
3. Add YAML frontmatter with a `title` at the top of the file.
4. Add your note content using MDX syntax. All images, videos, etc should be saved in the `public` directory.
5. Add the filename (without extension) to `content/meta.json` to include it in the sidebar.
6. Don't forget to save the file once you've finished adding your note content.

Once you've created and saved your note, it will be available for viewing and searching within the Fancy Notes website.

## Contributing

We welcome contributions from the community to enhance Fancy Notes. If you'd like to contribute, please follow these steps:

1. Fork the repository from [GitHub](https://github.com/AREA44/fancy-notes).
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are thoroughly tested.
4. Commit your changes and push them to your forked repository.
5. Create a pull request, providing a detailed description of your changes.

We appreciate your contributions!

## Google AdSense Integration

To enable Google AdSense to monetize your site, follow these instructions:

### 1. Setup Environment Variables
Set your Google AdSense Publisher Client ID in your deployment environment (such as Vercel) or your local `.env.local` file:
```env
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-XXXXXXXXXXXXXXXX
```
*(Replace `ca-pub-XXXXXXXXXXXXXXXX` with your actual Google AdSense publisher ID).*

### 2. Configure `ads.txt`
Google AdSense requires an `ads.txt` file at the root level.
We have provided a template file in `public/ads.txt`. Make sure to open it and replace the placeholder publisher ID with your own:
```text
google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
```

### 3. Displaying Ad Units in MDX Notes
You can display custom, responsive ad units manually inside any of your note files (`.mdx`) using the `<Adsense />` component. Simply specify the numeric `adSlot` ID of the ad unit you created in your AdSense dashboard:

```mdx
# My Fancy Note

Here is some notes about interesting topics...

<Adsense adSlot="1234567890" />

More note content continues here...
```

## License

Fancy Notes is released under the [MIT License](LICENSE).
