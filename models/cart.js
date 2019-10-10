module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }

  
    storedItem.qty++;
    
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;

    this.totalPrice += storedItem.item.price;
  
  };

  this.reduceByOne = function(id) {
    var storedItem2 = this.items[id];
   
    storedItem2.qty--;
   
    storedItem2.price -= storedItem2.item.price;
    this.totalQty--;

    this.totalPrice -= storedItem2.item.price;

  

    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.incrementByOne = function(id) {
    var storedItem3 = this.items[id];
  
    storedItem3.qty++;
   
    storedItem3.price += storedItem3.item.price;
    this.totalQty++;

    this.totalPrice += storedItem3.item.price;
   

  
  };

  this.removeItem = function(id) {

  

    
   
    this.totalQty -= this.items[id].qty;
    this.totalPrice -= this.items[id].price;
    delete this.items[id];
  };

  this.addMultiple = function(item, id, count) {
    var storedItem4 = this.items[id];
    if (!storedItem4) {
      storedItem4 = this.items[id] = { item: item, qty: 0, price: 0 };
    }

  
    storedItem4.qty += count;
   
    storedItem4.price = storedItem4.item.price * storedItem4.qty;
    this.totalQty += count;
  
    this.totalPrice += storedItem4.item.price * count;
  };

  this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
