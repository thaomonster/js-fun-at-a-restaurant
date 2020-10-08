function takeOrder(orderObj, orderList) {
if(orderList.length < 3) {
orderList.push(orderObj);
  };
};

function refundOrder(orderNum, takeOut) {
  for (var i = 0; i < takeOut.length; i++) {
    if (orderNum === takeOut[i].orderNumber) {
      takeOut.splice(i, 1)
    };
  };
};

function listItems(toGoOrders) {
  var sandwiches = [];
  for (var i = 0; i< toGoOrders.length; i++) {
    sandwiches.push(toGoOrders[i].item)
  };
  return sandwiches.toString().replace(/,/g, ', ');
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  // searchOrder
}