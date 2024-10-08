// Import the functions from the main file
const { renderRecipes } = require('./hompage'); // Adjust the path

// Mock the HTML elements required by the code
beforeEach(() => {
  document.body.innerHTML = `
    <div id="recipeList"></div>
    <input id="searchBar" />
  `;
});

describe('Recipe App', () => {
  const sampleRecipes = [
    {
      title: "chicken curry",
      image: "food/curry.webp",
      description: 'Chicken curry from the Indian subcontinent'
    },
    {
      title: "Nyama Choma",
      image: "food/choma.jpg",
      description: "Grilled meat, a favorite Kenyan delicacy"
    }
  ];

  test('should render all recipes', () => {
    const recipeListContainer = document.getElementById('recipeList');

    // Call the renderRecipes function
    renderRecipes(sampleRecipes);

    // Assert that the correct number of recipes are rendered
    expect(recipeListContainer.children.length).toBe(sampleRecipes.length);

    // Check if the recipe title is rendered correctly
    const firstRecipe = recipeListContainer.children[0];
    expect(firstRecipe.querySelector('h2').textContent).toBe(sampleRecipes[0].title);
  });

  test('should filter recipes based on search input', () => {
    const searchBar = document.getElementById('searchBar');
    const recipeListContainer = document.getElementById('recipeList');

    // Mock user typing "Nyama" in the search bar
    searchBar.value = 'Nyama';
    const inputEvent = new Event('input');
    searchBar.dispatchEvent(inputEvent);

    // Call the renderRecipes function with a filtered list
    const filteredRecipes = sampleRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(searchBar.value.toLowerCase())
    );
    renderRecipes(filteredRecipes);

    // Assert that only one recipe is rendered after filtering
    expect(recipeListContainer.children.length).toBe(1);

    // Check that the correct recipe is rendered
    const firstRecipe = recipeListContainer.children[0];
    expect(firstRecipe.querySelector('h2').textContent).toBe('Nyama Choma');
  });
});
