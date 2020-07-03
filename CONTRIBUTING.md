# Contributing

Thank you for wanting to contribute. This parser is essential to stylelint's built-in support of CSS-in-JS.

We want to encourage contributions! If you want to participate but couldn't, please [give us feedback](https://github.com/stylelint/postcss-css-in-js/issues/new) about what we could do better.

## Code contributions

To start coding, you'll need:

- a minimum of [Node.js](https://nodejs.org/en/) v10, though we do recommend using the latest LTS release
- the latest [npm](https://www.npmjs.com/)

Then:

1. [Fork and clone](https://guides.github.com/activities/forking/) this repository.
2. Install all the dependencies with `npm ci`.

### Run tests

Next, you'll want to run the tests using `npm test`.

However, this runs the test just once.

You can use `npm run watch` instead. It will run the tests when you change a file.

Additionally, you can run linting checks with `npm run lint`.

### Format code

We use [Prettier](https://prettier.io/) (with [a Husky and lint-staged precommit](https://prettier.io/docs/en/precommit.html)) to format your code automatically.

Alternatively, you can:

- trigger the pretty-printing all the files using `npm run format`
- use a [Prettier editor integration](https://prettier.io/docs/en/editors.html)

### Open a pull request

When you have something to share, it's time to [open a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).

After we review and merge your pull request, we'll invite you to become a maintainer of the stylelint organization. You'll then be able to work on the repository directly rather than your fork.
