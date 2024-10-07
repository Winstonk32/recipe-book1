const recipes = [
  {
    title: "chicken curry",
    image: "food/curry.webp",
    description: 'Chicken curry from the Indian subcontinent typically features chicken stewed in a tomato-based sauce seasoned with aromatic spices'
  },
  {
    title: "Nyama Choma",
    image: "food/choma.jpg",
    description: "Grilled meat (mostly goat or beef), a favorite Kenyan delicacy for any occasion."
  },
  {
    title: "Shrimp Scampi with Pasta",
    image: "food/shrimp.webp",
    description: "Shrimp scampi is a seafood dish made of shrimp cooked in a butter, garlic, and white wine sauce. ."
  },
  {
    title: "Persian Rice",
    image: "food/rice.jpg",
    description: "The most famous type of Persian rice dish is chelow or polo, and it's often served with stews, kebabs, and other dishes. ."
  },
  {
    title: "Spaghetti Carbonara",
    image: "food/carbonara.jpg",
    description: "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper, tossed with spaghetti."
  },
  {
    title: "Paella",
    image: "food/paella.jpg",
    description: "A traditional Spanish rice dish originating from Valencia, typically made with seafood, chicken, and saffron."
  },
  {
    title: "Sushi Rolls",
    image: "food/sushi.jpg",
    description: "A Japanese dish featuring vinegared rice, seafood, and vegetables wrapped in seaweed, often served with soy sauce and wasabi."
  },
  {
    title: "Beef Stroganoff",
    image: "food/stroganoff.jpg",
    description: "A Russian dish of sautéed pieces of beef served in a sauce with sour cream, traditionally paired with egg noodles or rice."
  },
  {
    title: "Pad Thai",
    image: "food/padthai.webp",
    description: "A stir-fried rice noodle dish from Thailand, made with eggs, tofu, shrimp, peanuts, and a tamarind-based sauce."
  },
  {
    title: "Moussaka",
    image: "food/moussaka.webp",
    description: "A Greek casserole made with layers of eggplant, minced meat (usually lamb), potatoes, and topped with a rich béchamel sauce."
  },
  {
    title: "Tom Yum Soup",
    image: "food/tomyum.webp",
    description: "A hot and sour Thai soup, typically made with shrimp, lemongrass, lime leaves, galangal, and chili peppers."
  },
  {
    title: "Falafel",
    image: "food/falafel.webp",
    description: "A popular Middle Eastern street food, made of deep-fried ground chickpeas or fava beans, served in pita bread with veggies and tahini."
  }


];


function renderRecipes(recipeList) {
  const recipeListContainer = document.getElementById("recipeList");
  recipeListContainer.innerHTML = ""; 

  recipeList.forEach(recipe => {
    const recipeCard = document.createElement("div");
    recipeCard.classList.add("recipe-card");

    recipeCard.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}">
      <h2>${recipe.title}</h2>
      <p>${recipe.description}</p>
      <button>Save Recipe</button>
    `;

    recipeListContainer.appendChild(recipeCard);
  });
}


renderRecipes(recipes);


const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input", function(e) {
  const searchQuery = e.target.value.toLowerCase();

  const filteredRecipes = recipes.filter(recipe =>
    recipe.title.toLowerCase().includes(searchQuery)
  );

  renderRecipes(filteredRecipes); 
});