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

module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem
}