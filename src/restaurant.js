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
  } else if (food.type === 'lunch' && !name.menus.breakfast.includes(food)) {
    name.menus.lunch.push(food)
  } else if (food.type === 'dinner' && !name.menus.breakfast.includes(food)) {
    name.menus.dinner.push(food)
  }
};

module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}