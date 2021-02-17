# Dev Posts app

## Table of Contents

- [About the Project](#about-the-project)
- [Installing Instructions](#installing-instructions)
- [ Offline First ](#offline-first)
- [Credits](#credits)
- [License](#license)

## About the Project

This project is a single page application to write posts built using React.js.

- user-friendly interface
- 100% Responsive for all screen sizes and
- Accessible for screen reader users with
- cross-browsers
- Fetched data from a fake JSON API using AJAX.
- You send POST and DELETE requests.

## Installing Instructions

- download zip folder or clone project > https://github.com/sarah27h/posts-app.git

- For develoment mode

  - `cd` to your project directory
  - install all project dependencies with `npm install`
  - open project in browser and start the development server with `npm run start`
  - you need another terminal to run our JSON fake server `npx json-server --watch data/db.json --port 8000`

- For production mode
  - `cd` to your project directory
  - install `yarn build`
  - to serve with static Server
  - `serve -s build`
  - Local host at http://localhost:3000

## Offline First

Note: Service Worker works only in production mode

- `cd` to project directory
- Use `serve -s build`
- Make sure you are in online mode (offline not selected)

## Credits

- React Docs https://reactjs.org/docs/getting-started.html
- Stackoverflow
- Quicksand font from Google Fonts

## License

This project is licensed under the terms of the <a href="https://choosealicense.com/licenses/mit/" rel="nofollow">MIT</a> license.
