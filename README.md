```
This is a sample template for weh plugins. To get started with your own plugin,
run the following commands:

$ git clone https://github.com/wehjs/plugin-template weh-your-plugin
$ cd weh-your-plugin
$ npm install

Here's some files you might be interested in adjusting:
README.md
LICENSE
package.json
lib/plugin.js
.github/config.yml (for use with probot config)

To enable Travis support, go to http://travis-ci.org and enable your GitHub plugin
repository. The next time you push, a build should automatically get started.
To enable codecov support, do the same, but with http://codecov.io.

You can delete this code block once you've modified the template!
```

<h1 align="center">
  weh-your-plugin
</h1>

<p align="center">
  a short description of what your plugin does
</p>

<p align="center">
  <!-- code coverage -->
  <a href="https://codecov.io/gh/YOURREPO"><img src="https://img.shields.io/codecov/c/github/YOURREPO.svg?style=flat-square"
  alt="code coverage"></a>
  <!-- travis ci -->
  <a href="https://travis-ci.org/wehjs/matter"><img src="https://img.shields.io/travis/YOURREPO.svg?style=flat-square"
  alt="test status"></a>
  <!-- npm version -->
  <a href="https://npmjs.org/package/YOURNPMNAME">
    <img src="https://img.shields.io/npm/v/YOURNPMNAME.svg?style=flat-square"
      alt="npm version" />
  </a>
  <!-- code style -->
  <a href="https://github.com/feross/standard"><img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
  alt="code style: standard"></a>
</p>

## Features

- It does things!
- And also, it does other stuff that you might be interested in

## Installation

```sh
npm install weh-your-plugin
```

## Usage example

```js
const weh = require('@weh/weh')
const plugin = require('weh-your-plugin')

// enter our main function:
// the main function should be an async function so that
// it automatically returns a promise
weh(async site => {
  // we register our plugin...
  site.use(plugin)
  // ...and initiate the build process
  return site
})
```

<!-- additional documentation about your plugin goes here -->

## Development

To work on this repository, clone it and install the npm dependencies:

```sh
git clone https://github.com/YOURREPO
cd YOURREPO
npm install
```

There are a couple of npm scripts provided for convenience:

- `npm test` - runs linters and ava in ci mode
- `npm run lint` - runs linters
- `npm run ava` - only runs ava once
- `npm run ava:ci` - runs ava in ci mode (generates coverage data)
- `npm run ava:watch` - runs ava in watch mode
- `npm run coverage` - generates coverage data
- `npm run update-coc` - pulls the latest `weallbehave` code of conduct
- `npm run deploy` - publishes npm package using `np`

## Maintainers

- Your Name <[yourname@example.org](mailto:yourname@example.org)>

## Code of Conduct

This repository operates under the [`weallbehave`](https://github.com/wealljs/weallbehave) Code of Conduct. Its contents can be found in [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

## License

MIT (see [LICENSE](LICENSE) document)
