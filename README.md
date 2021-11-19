# Create Miro App

## How to start:

> ## Important:
>
> We use [mkcert](https://github.com/FiloSottile/mkcert) to generate locally
> trusted development certificates, this is required to be able to run
> `localhost` over https. Which is also more secure than exposing your
> connection through a tunneling service like `ngrok` or `localtunnel`.
>
> When you run `yarn start` for the first time, you will be prompted to enter
> your password so `mkcert` can generate the certificate for you.
>
> You can check the generated certificate inside this path
> `~/.vite-plugin-mkcert`

- Run `yarn` or `npm install` to install dependencies
- Run `yarn start` or `npm start` to start developing, you should have a URL
  that looks like this

```
https://localhost:3000
```

- Paste the URL in `App URL` in your app settings
- open a board & you should see your app in the main toolbar when you click the
  three dots.

## How to build the app:

Run `yarn run build` or `npm run build` and this will generate a static output
inside `dist/` which you can host on static hosting service.

### About the app

This app is using [vite](https://vitejs.dev/) so you can check the documentation
if you want to modify `vite.config.js` configuration if needed.
