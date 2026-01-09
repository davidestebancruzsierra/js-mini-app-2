import * as Data from "./data.js";
import * as Render from "./render.js";
let currentCountry = null;
function showView(id) {
  $(".view").removeClass("active").addClass("hidden");
  setTimeout(() => $(`#${id}`).removeClass("hidden").addClass("active"), 10);
}
export function initEventListeners() {}
