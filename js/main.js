import { getUniqueCountries } from "./data.js";
import { renderCountries } from "./render.js";
import { initEventListeners } from "./events.js";

$(document).ready(function () {
  renderCountries(getUniqueCountries());
  initEventListeners();
});
