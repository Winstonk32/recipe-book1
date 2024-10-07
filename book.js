// Display saved recipes in the personal recipe book
function displaySavedRecipes() {
  savedRecipesList.innerHTML = '';
  if (savedRecipes.length === 0) {
      savedRecipesList.innerHTML = '<p>No recipes saved yet.</p>';
  } else {
      savedRecipes.forEach(recipe => {
          const recipeDiv = document.createElement('div');
          recipeDiv.classList.add('recipe-card');
          recipeDiv.innerHTML = `
              <h3>${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}">
              <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
              <button onclick="deleteRecipe(${recipe.id})">Delete</button>
          `;
          savedRecipesList.appendChild(recipeDiv);
      });
  }
}

// Delete a recipe from the personal recipe book
function deleteRecipe(recipeId) {
  savedRecipes = savedRecipes.filter(r => r.id !== recipeId);
  displaySavedRecipes();
}

// Search functionality (Basic implementation for demo)
document.getElementById('search-button').addEventListener('click', function () {
  const query = document.getElementById('search-input').value.toLowerCase();
  const searchResults = recipes.filter(recipe => recipe.title.toLowerCase().includes(query));

  popularRecipesList.innerHTML = '';
  if (searchResults.length === 0) {
      popularRecipesList.innerHTML = '<p>No recipes found.</p>';
  } else {
      searchResults.forEach(recipe => {
          const recipeDiv = document.createElement('div');
          recipeDiv.classList.add('recipe-card');
          recipeDiv.innerHTML = `
              <h3>${recipe.title}</h3>
              <img src="${recipe.image}" alt="${recipe.title}">
              <button onclick="viewRecipe(${recipe.id})">View Recipe</button>
          `;
          popularRecipesList.appendChild(recipeDiv);
      });
  }
});