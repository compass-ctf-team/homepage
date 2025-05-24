# COMPASS CTF Homepage

## Contributing

> [!NOTE]
> We only accept modification of contents from our members (alumni). However, it's welcome if you'd like to propose features like _webshell_, or fix typos.

### Updating contents

Currently, the contents are [members](./src/contents/members/) and [abouts](./src/contents/abouts/), where `abouts` holds introduction and awards of ours.

If you need to put some static resources, like images, pdfs or something else, put them in `public` and refer to them using `/your-file-name`.

### Updating layouts

Assuming you're familiar with `next.js`, please take a look at the [src](./src) folder.

## Developemnt

Install dependencies and run the server

```bash
pnpm install
pnpm dev
```

Building static site

```bash
pnpm next build
```
