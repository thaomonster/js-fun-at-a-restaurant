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
  var list = [];
  for (var i = 0; i< toGoOrders.length; i++) {
    list.push(toGoOrders[i].item)
  };
  return list.toString().replace(/,/g, ', ');
};

function searchOrder(toGos, food) {
  for (var i = 0; i < toGos.length; i++) {
    if (food === toGos[i].item) {
      return true;
    };
  };
  return false;
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder,
};