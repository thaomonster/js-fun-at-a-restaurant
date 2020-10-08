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


module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}