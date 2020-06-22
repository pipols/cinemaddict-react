import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import createAPI from "./api";
import { filmsAdapter } from "./utils/adapter";
import { createStore, applyMiddleware } from "redux";
import { reducer, operation } from "./reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const container = document.querySelector(`#root`);

const TOKEN = `Basic er88s3sdlkvzbddsaqw`;
const API_URL = `https://11.ecmascript.pages.academy/cinemaddict`;

const onResponse = (response) => {
  console.log(response);
};

const api = createAPI(onResponse);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(operation.loadFilms());
console.log(`load page`);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
// );
