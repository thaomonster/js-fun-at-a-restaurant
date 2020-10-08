function nameMenuItem(name) {
   return `Delicious ${name}`;
};

function createMenuItem(name, price, type) {
  var menu = {
    name: name,
    price: price,
    type: type,
  };
  return menu;
};

function addIngredients(topping, ingredients) {
 if (!ingredients.includes(topping)) {
    ingredients.push(topping)
  };
};

function formatPrice(price) {
return `$${price}`;
};

function decreasePrice(price) {
  var discount = price * 0.10;
  return price - discount;
};

function createRecipe(menuTitle, menuIngredients, menuType) {
  var recipeObj = {
    title: menuTitle,
    ingredients: menuIngredients,
    type: menuType,
  };
  
  return recipeObj;
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
};