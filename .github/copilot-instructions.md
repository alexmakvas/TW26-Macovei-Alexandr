# Repository Overview

This repository is a very small, static personal portfolio page for Alexandr Macovei. It contains:

- `test.html`: the only HTML file, with inline CSS in a `<style>` tag and simple markup.
- A few supporting assets (profile photo, CV PDF) referenced from the HTML.
- `README.md` with a one‑line description.

There is no build system, package manager, or server code. You can view the page by opening `test.html` in a browser or with a simple live‑server extension.

## What’s important for an AI assistant

1. **Static HTML/CSS only** – edits involve updating the markup or styles directly in `test.html`. CSS lives inside the `<style>` block; no external stylesheets are used.
2. **Layout conventions** – the page uses simple semantic elements (`<header>`, `<section>`, `<footer>`) and a handful of utility classes (`.card`, `.btn`, `.social-icons`). New content is added by copying the `.card` structure and adjusting headings/text.
3. **External dependencies** – CDNs are used for Font Awesome and Google Fonts. No npm, Node, or other package dependencies.
4. **Links behavior** – all outbound URLs include `target="_blank"` and icons use `<i class="fa-...">` with Font Awesome classes.
5. **Assets** – images and PDF files are referenced by relative paths; ensure they exist in the repo before linking.

## Common tasks you may be asked to help with

- Add or modify sections/cards in the page (about, CV, GitHub, social links).
- Adjust styling (colors, fonts, spacing) in the `<style>` block.
- Update personal information (name, age, links) directly in the HTML.
- Suggest improvements to accessibility (alt text, semantic tags) within the static page.

## Constraints and style notes

- Keep everything client‑side; do **not** suggest installing frameworks, build tools, or server components.
- When adding new HTML, follow the existing indentation and use the same class names to keep styles consistent.
- Use inline `<style>` rather than creating separate CSS files unless explicitly tasked to reorganize the project.

### Example patterns from the codebase

```html
<div class="card">
    <h2>About Me</h2>
    <p>...text...</p>
</div>
```

The `.btn` class is used for call‑to‑action links:

```html
<a class="btn" href="CV2-Alex-Makovei-eng.pdf" target="_blank">
    <i class="fa-solid fa-file"></i> Download CV
</a>
```

Social links are grouped under `.social-icons` with Font Awesome icons.

## When in doubt

- Reference `test.html` for structure or styling examples.
- Assume the user wants minimal changes—they are building a simple portfolio, not a full web app.

> **Note:** there are no tests, scripts, or build commands to run; the only "workflow" is editing and viewing the HTML file.

If any part of the page or intent is unclear, ask the user for details about what they want to add or change.