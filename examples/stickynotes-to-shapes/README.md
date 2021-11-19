# Stickies to shapes sample app
## How to start:

> ### Note:
>
> When you run `npm start` for the first time, you get a one-off prompt for your `sudo ` password.
> This is required to generate a locally-trusted development certificate with [`mkcert`](https://github.com/FiloSottile/mkcert).
> The certificate enables running `localhost` over HTTPS. HTTP isn't supported.
> The generated certificate is in the `~/.vite-plugin-mkcert` folder.

- Run `yarn` or `npm install` to install dependencies.
- Run `yarn start` or `npm start` to start developing. \
  Your URL should be similar to this example:

```
https://localhost:3000
```

- Paste this URL in the `App URL` box in your Miro app settings.
- Open a board and click the three dots (...) or the chevron (>>) on the left
  toolbar. You should see the Miro starter app.

## How to build the app:

- Run `yarn run build` or `npm run build`. \
  This generates a static output inside `dist/`, which you can host on a static hosting service.

## Folder structure

```
.
├── src
│  └── index.js <-- The code for the entry point lives here. For this sample app, all the logic is contained here.
└── index.html <-- The app entry point. This is what you add to the App URL box in the Miro app settings.
```

### About the app

This sample app shows how you can select items on the board, and then click the app icon to change the selected sticky notes into shapes.
It's based on [this v1 sample app](https://developers.miro.com/docs/web-plugin-examples#stickies-to-shapes).

This app uses [Vite](https://vitejs.dev/).
If you want to modify the `vite.config.js` configuration, see the [Vite documentation](https://vitejs.dev/guide/).
