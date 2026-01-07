const countryEmojis = {
  Colombia: "co",
  CzechRepublic: "cz",
  Brasil: "br",
};

export function renderCountries(countries) {
  const $box = $("#countryContainer").empty();
  countries.forEach((c) => {
    $box.append(`<div class="card-style country-card" data-country="${c}">
     <span class="country-emoji">${countryEmojis[c]}</span>
     <h3 class="card-title">${c}</h3>
     </div>`);
  });
}

export function renderRecipeList(recipes) {
  const $box = $("recipeListContainer").empty();
  if (recipes.lenght === 0) return $("#emptyState").removeClass("hidden");
  $("#emptyState").addClass("hidden");
  recipes.forEach((r) => {
    $box.append(`<div class="card-style recipe-card" data-id="${r.id}" >
      <div style="font-size:3rem">🍰</div>
      <h3 class="card-title">${r.title}</h3>
      <div class="tags-container  style="justify-content:center; margin-top:5px">
      <span class="tag-pill">⏱ ${r.time}</span>
      </div>
      </div>`);
  });
}
