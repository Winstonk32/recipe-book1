document.addEventListener('DOMContentLoaded', () => {
  const savedRecipesList = document.getElementById('saved-recipes');
  const savedRecipes = JSON.parse(localStorage.getItem('savedRecipes')) || [];

  function displaySavedRecipes() {
    savedRecipesList.innerHTML = '';
    savedRecipes.forEach((recipe, index) => {
      const recipeCard = document.createElement('div');
      recipeCard.className = 'recipe-card';
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}">
        <h2>${recipe.title}</h2>
        <button class="edit-recipe">Edit Recipe</button>
        <button class="delete-recipe" data-index="${index}">Delete Recipe</button>
      `;
      savedRecipesList.appendChild(recipeCard);
    });
  }

  
  savedRecipesList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-recipe')) {
      const index = e.target.getAttribute('data-index');
      savedRecipes.splice(index, 1);
      localStorage.setItem('savedRecipes', JSON.stringify(savedRecipes));
      displaySavedRecipes();
    }
  });

  displaySavedRecipes();
});
