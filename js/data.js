const initialData = [
  {
    id: "1",
    title: "Pineapple Sweet",
    country: "Colombia",
    time: 40,
    tags: ["Hot", "Cold", "Traditional", "No bake"],
    ingridients: [
      "1 ripe pineapple, chopped",
      "1 cup sugar or panela",
      "1 cinnamon stick",
      "2 cloves",
      "½ cup water",
    ],
    steps:
      "1. Place all ingredients in a pot.\n2. Cook over medium heat until the pineapple is soft.\n3. Let it reduce until thick.\n4.Remove cinnamon and cloves.\n5.Serve warm or cold.",
  },
  {
    id: "2",
    title: "Koláče",
    country: "Czech Republic",
    time: 110,
    tags: ["Baked", "Hot", "Traditional", "Sweet"],
    ingridients: [
      "3 cups flour",
      "½ cup sugar",
      "1 egg",
      "½ cup warm milk",
      "2 tablespoons butter",
      "1 teaspoon dry yeast",
      "Filling: jam, cream cheese, or poppy seeds",
    ],
    steps:
      "1. Activate the yeast with warm milk.\n2. Mix all ingredients and knead.\n3. Let the dough rest for 60 minutes.\n4.Shape rolls and add filling.\n5.Bake at 180°C (350°F) for 20 minutes.",
  },
  {
    id: "3",
    title: "Brigadeiro",
    country: "Brasil",
    time: 25,
    tags: ["Hot", "Cold", "No bake", "Classic"],
    ingridients: [
      "1 can sweetened condensed milk",
      "2 tablespoons cocoa powder",
      "1 tablespoon butter",
      "Chocolate sprinkles",
    ],
    steps:
      "1. Combine all ingredients in a saucepan.\n2. Cook over medium heat, stirring constantly.\n3. When it pulls away from the pan, remove from heat.\n4.Let cool.\n5.Roll into balls and coat with sprinkles.",
  },
];
let recipes = JSON.parse(localStorage.getItem("myRecipes")) || initialData;
const save = () => localStorage.setItem("myRecipes", JSON.stringify(recipes));
export const getAllRecipes = () => recipes;
export const getRecipesById = (id) => recipes.find((r) => r.id === id);
export const getRecipesByCountry = (c) =>
  recipes.filter((r) => r.country === c);
export function getUniqueCountries() {
  return [...new Set(recipes.map((r) => r.country))];
}
export function addRecipe(r) {
  r.id = Date.now().toString();
  recipes.push(r);
  save();
}
export function updateRecipe(r) {
  recipes = recipes.map((old) => (old.id === r.id ? r : old));
  save();
}
export function deleteRecipe(id) {
  recipes = recipes.filter((r) => r.id !== id);
  save();
}
