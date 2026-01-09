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

export function renderRecipeDetail(r) {
  const tagsHtml = r.tags
    .map(
      (t) => `
  <span class="tag-pill">${t}</span>
  `
    )
    .join("");

  const ingHtml = r.ingridients
    .map(
      (i) => `
  <li>${i}</li>
  `
    )
    .join("");
  const stepsHtml = r.steps
    .split("\n")
    .filter((s) => s.trim())
    .map((s) => `<li>${s}</li>`)
    .join("");

  const html = `
  <div class="detail-header">
  <h2 class="detail-title">${r.title}</h2>
  <div class="detail-meta">
  <span>${countryEmojis[r.country]} ${r.country}</span>
  <span>⏱️ ${r.time} min</span>
  </div>
  <div class="tags-container">${tagsHtml}</div>
  </div>
  <div class="recipe-body">
  <div class="ingridients-box">
  <h3>📜 Ingridients</h3>
  <ul>${ingHtml}</ul>
  </div>
  <div class="steps-box">
  <h3>👩‍🍳 Steps</h3>
  <ol>${stepsHtml}</ol>
  </div>
  </div>
  
  `;
  $("#recipeDetailContent").html(html);
  $("#btnEditRecipe", "btnEditRecipe").data("id", r.id);
}
