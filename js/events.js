import * as Data from "./data.js";
import * as Render from "./render.js";
let currentCountry = null;
function showView(id) {
  $(".view").removeClass("active").addClass("hidden");
  setTimeout(() => $(`#${id}`).removeClass("hidden").addClass("active"), 10);
}
export function initEventListeners() {
  $(document).on("click", ".country-card", function () {
    currentCountry = $(this).data("country");
    $("#selectedCountryTitle").text(`Desserts of ${currentCountry}`);
    Render.renderRecipeList(Data.getRecipesByCountry(currentCountry));
    showView("view-list");
  });
  $(document).on("click", ".recipe-card", function () {
    const r = Data.getRecipesById($(this).data("id").toString());
    Render.renderRecipeDetail(r);
    showView("view-detail");
  });
  $(".btn-back").on("click", function () {
    const target = $(this).data("target");
    if (target === "view-countries");
    Render.renderCountries(Data.getUniqueCountries());
    if (target === "view-list");
    Render.renderRecipeList(Data.getRecipesByCountry(currentCountry));
    showView(target);
  });
  $("#btnNewRecipe").on("click", function () {
    $("#recipeForm")[0].reset();
    $("#editId").val("");
    $("#formTitle").text("New Dessert");
    showView("view-form");
  });
  $("#btnEditRecipe").on("click", function () {
    const r = Data.getRecipesById($(this).data("id").toString());
    $("#editId").val(r.id);
    $("#inputTitle").val(r.title);
    $("inputCountry").val(r.country);
    $("inputTime").val(r.time);
    $("inputTags").val(r.tags.join(", "));
    $("inputIngredients").val(r.ingridients.join("\n"));
    $("inputSteps").val(r.steps);
    $("#formTile").text("Edit Recipe");

    showView("view-form");
  });
  $("#btnDeleteRecipe").on("click", function () {
    if (confirm("Delete?")) {
      Data.deleteRecipe($(this).data("id").toString());
      Render.renderRecipeList(Data.getRecipesByCountry(currentCountry));
      showView("view-list");
    }
  });
  $("#recipeForm").on("submit", function (e) {
    e.preventDefault();
    const data = {
      id: $("#editId").val(),
      title: $("#inputTitle").val(),
      country: $("inputCountry").val(),
      time: $("inputTime").val(),
      tags: $("inputTags")
        .val()
        .split(",")
        .map((t) => t.trim()),
      ingridients: $("inputIngredients")
        .val()
        .split("\n")
        .filter((t) => t.trim()),
      steps: $("inputSteps").val(),
    };
    data.id ? Data.updateRecipe(data) : Data.addRecipe(data);
    currentCountry = data.country;
    Render.renderRecipeList(Data.getRecipesByCountry(currentCountry));
    showView("view-list");
  });
  $("#searchInput").on("keyup", function () {
    const term = $(this).val().toLowerCase();
    const list = Data.getRecipesByCountry(currentCountry).filter(
      (r) =>
        r.title.toLowerCase().includes(term) ||
        r.tags.some((t) => t.toLowerCase().includes(term))
    );
    Render.renderRecipeList(list);
  });
}
