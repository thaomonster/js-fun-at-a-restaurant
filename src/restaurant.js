function createRestaurant(name) {
  var restaurantName = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  };
  return restaurantName;
};

function addMenuItem(name, food) {
  if (food.type === 'breakfast' && !name.menus.breakfast.includes(food) ) {
    name.menus.breakfast.push(food)
  } else if (food.type === 'lunch' && !name.menus.lunch.includes(food)) {
    name.menus.lunch.push(food)
  } else if (food.type === 'dinner' && !name.menus.dinner.includes(food)) {
    name.menus.dinner.push(food)
  };
};

function removeMenuItem(name, food, type) {
  var menuType = name.menus[type]
  for (var i = 0; i < menuType.length; i++) {
  if (menuType[i].name === food) {
      menuType.splice(i, 1);
      return `No one is eating our ${food} - it has been removed from the ${type} menu!`;
      };
    };
    return `Sorry, we don't sell ${food}, try adding a new recipe!`
};

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem,
};