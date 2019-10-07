module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQty = oldCart.totalQty || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id) {
    var storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    }

    console.log(typeof storedItem.qty);
    console.log(typeof storedItem.price);
    storedItem.qty++;
    // console.log(typeof storedItem.qty);
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;

    this.totalPrice += storedItem.item.price;
    // this.totalPrice = Number(parseFloat(this.totalPrice).toFixed(2));
    // console.log(Number.parseFloat(this.totalPrice).toFixed(2));
    // console.log(typeof Number(parseFloat(this.totalPrice).toFixed(2)));
  };

  this.reduceByOne = function(id) {
    var storedItem2 = this.items[id];
    // this.items[id].qty--;
    storedItem2.qty--;
    // console.log(this.items[id].price);
    storedItem2.price -= storedItem2.item.price;
    this.totalQty--;

    this.totalPrice -= storedItem2.item.price;

    // this.items[id].qty--;
    // this.items[id].price -= this.items[id].item.price;
    // this.totalQty--;
    // this.totalPrice -= this.items[id].item.price;

    // this.totalPrice = Number(parseFloat(this.totalPrice).toFixed(2));

    // console.log(this.items[id].item.price);
    // console.log(this.items[id].price);
    // console.log(typeof this.items[id].price);
    // console.log(this.totalPrice);

    if (this.items[id].qty <= 0) {
      delete this.items[id];
    }
  };

  this.incrementByOne = function(id) {
    var storedItem3 = this.items[id];
    // this.items[id].qty++;
    storedItem3.qty++;
    // console.log(this.items[id].price);
    storedItem3.price += storedItem3.item.price;
    this.totalQty++;

    this.totalPrice += storedItem3.item.price;
   

    // console.log(this.items[id].price);
    // console.log(this.items[id].item.price);
    // console.log(this.items)
    // this.items[id].price += this.items[id].item.price;
    // console.log(this.items[id].price);

    // this.items[id].price = Number(parseFloat(this.items[id].price).toFixed(2));
    // console.log(this.items[id].price);
    // console.log(Number(this.items[id].price.toFixed(2)));
    // console.log(typeof this.items[id].item.price)
    // console.log(this.items[id].price.toFixed(2));
    // console.log(typeof Number(this.items[id].price.toFixed(2)));
    // console.log(this.totalPrice);

    // this.totalQty++;

    // this.totalPrice += this.items[id].price;
   
    // this.totalPrice = Number(this.totalPrice.toFixed(2));
    // console.log(this.totalPrice);
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

    console.log(count);
    storedItem4.qty += count;
    console.log(storedItem4.qty);
    storedItem4.price = storedItem4.item.price * storedItem4.qty;
    this.totalQty += count;
    console.log(this.totalQty);
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
