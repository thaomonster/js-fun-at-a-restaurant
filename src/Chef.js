class Chef {
  constructor(name, workPlace) {
    this.name = name;
    this.restaurant = workPlace;
  };

  greetCustomer(customerName, morning) {
    if (morning === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    };
  };

  checkForFood(item) {
    if (this.restaurant.menus[item.type].includes(item)) {
    return `Yes, we're serving ${item.name} today!`;
    } else {
    return `Sorry, we aren't serving ${item.name} today.`
    }
  };
};

module.exports = Chef;