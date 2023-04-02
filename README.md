## Demo

For running demo please visit this Github Page:

https://hungvt13.github.io/wego-app/

## QuickStart

- Step 1:

Create a `.env` file in the root of the project and copy content from `.env.dev.` into that file.

- Step 2:

```bash
git clone https://github.com/hungvt13/wego-app.git
cd wego-app
npm install
```

- Step 3:

Run a development server
```bash
npm run dev
```

## Libraries used in this project
- vite: this React App was created using Vite
- react-redux: state management
- redux-toolkit
- redux-saga: handle side effects
- axios: http requests
- font-awesome: icons
- clsx: className helper
- eslint: linting
- vitest: alternative for jest which vite apps not supported yet
- react-testing-library

## Project Structure

```bash
|src            // source folder
 |---api        // store all apis 
 |---components // store all UI components
 |---hooks      // custom hooks
 |---service    // UI formatters and data transformers
 |---state      // redux state
 |---test       // test config files
```

### Api

The base api setup can be found in `./src/api/baseApi.js`
Base API URL get from `VITE_FOOD_BASE_URL` in `.env` 

### Components

All component should have their own folder except for supporting components.
Each folder should have an `index.js` file to export the component.
The reason is that in the future if we change anything we just need to edit the `index.js` file.

### State

In this project, we use `Redux` with `ReduxToolkit` to help with statemangment as well as `ReduxSaga` for handling side effects

Each feature will have their own folder for example:
Food feature will have a folder named `food` which contains
- foodSaga.js
- foodSelector.js
- foodSlice.js
- index.js // export all the items from other files here so we can import them easier

### Test

Due to the fact that this app was created using `vite`, there is no official `Jest` supporting for this yet.

So `Vitest` was chose to be alternative method, this package is very similary to `Jest` also

Run test
```bash
npm run test
```
