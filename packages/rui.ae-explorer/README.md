This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and extended with [React App Rewired](https://github.com/timarney/react-app-rewired)

Features:

- Create Apps, Components, Components Libraries or MicroApps as Components with TypeScript.
- Preconfigured Storybook for development and/or documentation.
- Preconfigured React-Styleguidist for development and/or documentation.
- Styled Components preinstalled with usage examples.
- Redux with Redux-Persist and redux-undo preinstalled with usage examples.
- React Router Dom preinstalled with usage exaples.
- Ant-Design preinstalled.
- Preconfigured Prettier.
- Adjustable StyleLint Configuration working with Styled Components and Prettier.
- Adjustable TsLint Coniguration with React and Sonar Extension.
- Editorconfig prepared.
- Jest Snapshottesting, Enzyme and Istanbul Coveragereport preconfigured.
- Extendable Create React App (CRA) configuration with React App rewired.
- CRA Config extended with Webpack PurgeCssPlugin to remove unused CSS classes.
- CRA Config extended with Webpack MiniCssExtractPlugin to extract CSS out of js files.
- CRA Config extended with Webpack BundleAnalyzerPlugin to analyze bundles of app builds.
- Lib builds are minified for use e.g in CDN's.
- IE ready with polyfill.io.
- Possibility to develop components inside apps (lib folder) or inside the component library with the help of Storybook or React-Styleguidist.

# Create Apps, Components, Component Libraries and Apps as Components

## Creating an app

Develop applications within the app folder and include the start component into the index.tsx of the src folder root.<br>
Start development mode with `yarn start`.<br>
Build your app with `yarn build:app`.

### Hint

You can use the lib folder during development of apps as well. In this way you can later easily create a separated component-library with `yarn build:lib`. An you can use the lib folder during development of apps to use Storybook and React-Styleguidist inside the app package. If a component is ready, you can move it into the component library.

## Creating a component or a component library

Develop components or component libraries within the components folder. For best development expierience it is recommended to include the current component you are working on into the index.tsx of the src folder root. But you can also develop it directly in Storybook or React-Styleguidist. But than Hot Reloading is much slower!<br>
Start development mode with `yarn start`.<br>
Build your components with `yarn build:lib`.<br>
Use with Live Reloading and Yarn Workspaces within an app `yarn build:lib:watch`.

## Creating an app as a component

Use `yarn build:app:component` to build an app as an component.<br>
**Keep in mind that the app has to start with an index.ts(x) file or to change main field in package.json to the name of the entry file of the app!**

### Caveats

With the current implementation it is not possible to include assets like svg, png, css or font files in a component build. Because the current implementation uses only TypeScript to create components. There are two solutions to slove this problem:

1. Separate your assets in an own package or in several packages in include them as dependencies.
2. Use Rollup to build an app as an component.

It is also not possible to use components from the lib folder directly when using the script `yarn build:app:component`. You have to separate them to an own packages and include them as an dependency.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn test:coverage`

Launches the test runner and creates a coverage report within the terminal and a html coverage report into the the coverage folder. You can start the html coverage report by opening the index.html in the coverage folder in a browser. The VSC Extension "open in browser" enables an entry in the contex menu (right click => Open in Default Browser) to open it directly.

### `yarn debug`

Launches the test runner in the debug mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build:app`

Builds the content of the `src app folder` for production to the `root build folder`.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn build:app:serve`

Serves the app build at `port 5000`

### `yarn build:app:component`

Builds an app as a component. **Keep in mind that the app has to start with an index.tsx file or to change main field in package.json to the name of the entry file of the app!**

### `yarn build:lib`

Builds the content of the `src lib folder` as an production ready component or a component library to the `root lib folder`.<br>

### `yarn build:lib:watch`

Builds the content of the `src lib folder` as an production ready component or a component library to the `root lib folder` and starts a rebuild if a file has changed.<br>
It is a requirement to anable live reloading if used as a component or a component-library in combination with yarn workspaces.

### `yarn storybook`

Launches Storybook in development mode at `port 6060`.

### `yarn storybook:build`

Creates a Storybook build to the `storybook-static folder`.

### `yarn storybook:serve`

Serves the storybook build at `port 5000`

### `yarn styleguide`

Launches React-Styleguidist in development mode at `port 6006`.

### `yarn styleguide:build`

Creates a React-Styleguidist build to the `styleguide folder`.

### `yarn styleguide:serve`

Serves the react styleguidist build at `port 5000`

### `yarn lint`

Lints scripts and styles together

### `yarn lint:styles`

Lints styles only

### `yarn lint:scripts`

Lint scripts only

### `yarn analyze`

Opens the `stats.json` file inside the `build folder` containing a bundle statistic created by (Webpack Bundle Analyzer)[https://github.com/webpack-contrib/webpack-bundle-analyzer] during the build process.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
