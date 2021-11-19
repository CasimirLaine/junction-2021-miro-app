# Template builder sample app

## How to start

> ### Note:
>
> When you run `npm start` for the first time, you get a one-off prompt for your `sudo ` password.
> This is required to generate a locally-trusted development certificate with [`mkcert`](https://github.com/FiloSottile/mkcert).
> The certificate enables running `localhost` over HTTPS. HTTP isn't supported.
> The generated certificate is in the `~/.vite-plugin-mkcert` folder.

- Run `yarn` or `npm install` to install the app dependencies.
- Run `yarn start` or `npm start` to start developing. \
  Your URL should be similar to this example:

```
https://localhost:3000
```

- Paste this URL in the `App URL` box in your Miro app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left
  toolbar. You should see the Miro starter app.

## How to build the app

- Run `yarn run build` or `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

## Folder structure

```
.
├── src
│  ├── assets
│  │  └── style.css
│  ├── app.js      // The code for the app lives here
│  └── index.js    // The code for the app entry point lives here
├── app.html       // The app itself. It's loaded on the board inside the 'appContainer'
└── index.html     // The app entry point. This is what you specify in the 'App URL' box in the Miro app settings
```

### About the app

This sample app shows how you can create a template programmatically using the Miro Web SDK.
It demonstrates how to work with shape and text items on the board.
It's based on [this v1 sample app](https://developers.miro.com/docs/web-plugin-examples#template-builder).

This app uses [Vite](https://vitejs.dev/).
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
