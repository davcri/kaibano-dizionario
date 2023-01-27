Simple website made for the preservation of Kaibano language.

<a href="https://kaibano.netlify.app/">
    <img width="600" src="https://user-images.githubusercontent.com/6860637/143919774-1b0f27cd-1714-4bc1-be7e-6a88f3cf8b44.png" />
</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/e494501b-5d64-4c20-8806-46035aa4e447/deploy-status)](https://app.netlify.com/sites/kaibano/deploys)

# Development info

This app was made using Vue3/Vite.

**Suggested IDE:** [VSCode](https://code.visualstudio.com/) +
[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
(and disable Vetur).

### Update dictionary

```sh
npm run update-dictionary
```

In order to run this command, you need a correct `.env` file with these keys
defined:

```conf
GOOGLE_SERVICE_ACCOUNT_EMAIL="email@google.example"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\ ... \n-----END PRIVATE KEY-----\n"
```

Read "google-spreadsheet" doc for more info:
https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account

### Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

### Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# License

Software is licensed under the [MIT License](./LICENSE)

#### Assets

Fonts: [Nunito](https://fonts.google.com/specimen/Nunito) (OFL)  
Sounds: [Kenney Sounds](https://kenney.nl/assets/interface-sounds) (CC0)
