![Rocket icon](./dev/public/images/rocket-launch.svg)

## Welcome to LP starter

> Rapidly build modern landing pages with [Vite](https://vite.dev/) and [Tailwind CSS](https://tailwindcss.com/).

### Usage examples

- **[example page](https://lp-starter.vercel.app/page/)**
- **[personal page](https://leandrow.github.io)**

`Tip:` Use [HypeUI](https://www.hyperui.dev) by simply copying and pasting the components code..

### Dark mode

Set mode: dark or light

1. Open the `/assets/darkmode.js`
2. Set `localStorage.theme = ''`

If left blank, the mode will be based on OS preferences

### VS Code

Recommended plugins

- Tailwind CSS IntelliSense
- Prettier - Code formatter

## Development

**Git clone**

```sh
git clone https://github.com/leandrow/lp-starter.git
```

Enter the **project folder**

```sh
cd lp-starter
```

**Install dependencies** with [pnpm](https://pnpm.io/)

```sh
pnpm install
```

**To run**

```sh
npm run dev
```

**To build**

```sh
npm run build
```

```sh
npm run preview
```

## What's inside?

```
Dev
|-- assets
|-- page
|-- public/images
|-- styles
|
|-- index.html

Build
|-- assets
|-- images
|-- page
|
|-- index.html
```

We also added a custom `404.html` (page not found) for Github pages in the `dev/public` folder.

## Contributing

Got any suggestions to make things even better?

[Send it here](https://github.com/leandrow/lp-starter/issues) or create a **new pull request.**
