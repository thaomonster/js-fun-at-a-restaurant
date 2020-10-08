function takeOrder(orderObj, orderList) {
if(orderList.length < 3) {
orderList.push(orderObj);
  };
};




module.exports = {
  takeOrder,
  // refundOrder,
  // listItems,
  // searchOrder
}