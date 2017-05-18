# hacktivpress
CMS Website blogging.

### Features!
  - Posting Article
  - Delete Article
  - Update Article
  - View Article
  - Login
  - Signup
  - Search Article by title
  - Search Article by Category
  - Search Article by Author

### Tech

  hacktivpress uses a number of open source projects to work properly:

  * [Bootstrap] - great UI boilerplate for modern web apps
  * [node.js] - evented I/O for the backend
  * [Express] - fast node.js network app framework
  * [jQuery] - duh
  * [Vue] - component
  * [Vuex] - central management state

### Installation

  hacktivpress  requires [Node.js](https://nodejs.org/) v4+ to run.
  Install the dependencies and devDependencies and start the server.

```sh
$ cd hacktivpress
$ npm install
$ npm start
```

### Endpoint Route Http

| Method | Endpoint | Description |
| ------ | ------ |------ |
| GET | /users | get all user data |
| GET | /users/:id | get one user data |
| PUT | /users/:id | update user data |
| DELETE | /users/:id | delete user data |
| POST | /users | create user data |
| ------ | ------ |------ |
| GET | /article | get all article data |
| GET | /article/:query | get article data with query |
| PUT | /article/:idarticle| update article data |
| DELETE | /article/:idarticle/:iduser | delete article data |
| POST | /article/:idarticle/:iduser | create article data |
