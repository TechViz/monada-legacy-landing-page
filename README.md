# Mônada landing page

This is the project of Mônada's landing page.

You can see a live version of this site [here](https://monada.netlify.app).

## What major libraries is this using?

- **styled-components:** This is a *CSS-in-JS* solution, which I personaly like a lot. It works very well with *Server-side rendering* tools (like `Next.js`). Webpage [here](https://styled-components.com/)
- **Next.js:** Allows for *Server-side rendering* (**SSR**) and *static page generation* (**SSG**). It's great for a faster page loading time, and removed most of the problems with a *CSS-in-JS* styling solution. It's built uppon **React**. Webpage [here](https://nextjs.org/)
- **React:** Library for building user interfaces.  Webpage [here](https://reactjs.org/)

## Folder architecture

Here are a few short descriptions of each folder's purpose:

### public

The `public` folder should hold all images, text fonts, videos, etc.. It's content's are not very strictly organized, so you may choose where to place your assets.

### src/pages

The contents of `src/pages` is actually defined by `Next.js` itself. You can read more [here](https://nextjs.org/docs/basic-features/pages).

`src/pages` should not have any logic at all, neither should it have any component construction. All it should do is import things from `src/containers` and export them.

### src/containers

Since `src/pages` has a special meaning for `Next.js`, the `src/containers` folder exists to allow for more flexibility around the definition of pages. Pages's component's should be defined in `src/containers`, and imported in `src/pages`. This allows for `src/containers` to have files that are not directly related to pages, but are auxiliar components to them.

### src/constants

Here lives hard data that should never change. The contents of these files should be mostly dictionaries of data, with the minimum ammount of possible logic.

### src/components

This folder should store any component that will be used more than once. It has two subfolders:

- **src/components/layout:** Here we should have components that are a whole piece of the page (e.g. navbar or footer). They aren't reusable on any context, only in specific places of specific pages.

- **src/components/reusable:** Here should live all ambient agnostic components, such as buttons, icons, inputs, etc...