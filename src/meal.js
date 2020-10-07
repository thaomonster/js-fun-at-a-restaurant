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

function addIngredients(topping, array) {
 if (!array.includes(topping)) {
    array.push(topping)
  };
};

function formatPrice(price) {
return `$${price}`;
};

function decreasePrice(price) {
  var discount = price * 0.10;
  return price - discount;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  // createRecipe
};


