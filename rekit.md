# Steps to generate rekit-boilerplate-cra
* Execute: `create-react-app cra-app` to get the base project.
* Run `npm run eject` to get a configureable project.
* Create a clean Rekit app by `rekit create rekit-app --clean`.
* Merge `rekit-app/src` to `cra-app/src`, leave `index.js` in `rekit-app`.
* Run `npm start` under `cra-app`, should work.
* Create `tools` folder.
* Intall `rekit-core`, `rekit-studio`, `express-history-api-fallback`.
* Create the script to start Rekit Studio.
* Add `start-studio` to start.js.
* Add `rekit` section to package.json, with `{ devPort: 3000, studioPort: 6076, buildPort: 6077, plugins: [], css: 'less' }`.
* Start Rekit Studio by `npm start`.
* Remove `styles/reset.less` because it conflicts with UI libraries like `ant.design`.
* Edit `src/index.js` to use Rekit's one.
* Install `react-hot-loader`, `react-router-dom`, `redux`, `redux-thunk`, `react-redux`, `react-router-redux@next`.
* Use `package.json.rekit.devPort` for start.js.
* Should show "Hello Rekit!" at http://localhost:3000 .
* Copy content of `src/App.js` to `src/features/home/DefaultPage.js`.
* Move `src/logo.svg` to `src/images/react-logo.svg`.
* Add `src/images/rekit-logo.svg`.
* Add `less`, `less-loader`.
* Edit `config/paths.js` to add `appIndexStyle`
* Edit `config/webpack.config.dev.js` to add `appIndexStyle` to entry.
* Edit `config/webpack.config.dev.js` to add `less-loader`.
* Now style should work.
* Edit component `home/DefaultPage` to show get started for Rekit Studio.
* Install `axios`.
* Add examples feature.
* Install `redux-logger`.
* Install `lodash`, `babel-plugin-lodash`, `babel-plugin-syntax-dynamic-import`.
* Add `.babelrc`, remove babel section from package.json.
* Install `enzyme`, `enzyme-adapter-react-16`, `redux-mock-store`, `nock`.
* Create `postCreate.js` to support `--sass`.
* Update build.js to use webpack Progress plugin.
