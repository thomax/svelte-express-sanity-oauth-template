# svelte-express-sanity-oauth-template

Template repo for setting up a full-stack web application with little config and even less hassle.

## What's in the box?

- [Svelte](https://svelte.dev/docs/svelte/overview) (not Sveltekit)
- [Express server](https://expressjs.com/en/starter/installing.html)
- [Sanity studio](https://www.sanity.io/manage) (for editing content)
- OAuth using Passport middleware, and Google as auth provider.
- [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) and [Bootswatch](https://bootswatch.com/)

## Architecture
```
  Frontend (Svelte)
       |
       |    
  Backend (Express)
       |
       |    
  Hosted database (Sanity) —-— Content Editor (Sanity Studio)
```

## Usage

- [Create a new repo](https://github.com/new?template_name=svelte-express-sanity-oauth-template&template_owner=thomax) from this template or run `git clone https://github.com/thomax/svelte-express-sanity-oauth-template.git` in your terminal
- Create a project on the free developer license over at [Sanity](https://www.sanity.io/manage?new-project)
- Create your own .env files based on .env.example 
     - In `backend/.env` you need
          - OAuth client id and client secret. Get them at [Google Cloud Console](https://console.cloud.google.com/) or another OAuth provider of your preference.
          - Sanity project id, dataset name and a secret token to let the backend edit data. Get these at [Sanity.io](https://www.sanity.io/manage).
     - In `sanity-studio/.env` you need need the project id and dataset name
- Run in `npm install && npm run dev` in the `frontend`, `backend` and `sanity-studio` directories.
- Point your browser to http://localhost:5173 and you're off!

## FAQ
Q: Why is the UI in the frontend so ugly?

A: Because that's where this template ends, and your task begins 💪

