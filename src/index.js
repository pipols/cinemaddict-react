import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import createAPI from "./api";
import { filmsAdapter } from "./utils/adapter";

const container = document.querySelector(`#root`);

const TOKEN = `Basic er88s3sdlkvzbddsaqw`;
const API_URL = `https://11.ecmascript.pages.academy/cinemaddict`;

const onResponse = (response) => {
  console.log(response);
};

const api = createAPI(onResponse);

api
  .get(`/movies`)
  .then(({ data }) => filmsAdapter(data))
  .then((films) => ReactDOM.render(<App films={films} />, container));
