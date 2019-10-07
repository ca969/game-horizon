module.exports = function Favorite(oldFavorite) {
  this.items = oldFavorite.items || [];
  // this.totalQty = oldCart.totalQty || 0;
  // this.totalPrice = oldCart.totalPrice || 0;

  this.add = function(item, id, count) {
    // console.log(this.items[count]);
    // console.log(typeof id);
    // var storedItem = this.items[id];
    // console.log("STORED ITEM");
    // console.log(this.items);
    // console.log("---------------------------");
   
    // this.items[id] = { id: item };
    this.items[0] = item;
    // this.items[0] = { element: { item: item } };


    // if (this.items.length  === 1 ) {
    //   this.items = [];
    // }
    // this.items.forEach(function(item, index) {
    //   storedItem = this.items[index].element[id];
    // })
    // console.log("STORED ITEM");
    // console.log(this.items);
    // console.log("---------------------------");

    // if (this.items.length < 0) {
    //   var obj = { element: { item: item } };
    //   this.items.push(obj);
    //   console.log("STORED ITEM");
    //   console.log(this.items);
    //   console.log("---------------------------");
    // } else {
    //   this.items.push({ element: { item: item } });
    // }

  

    //   storedItem.qty++;
    //   console.log(typeof storedItem.qty);
    //   storedItem.price = storedItem.item.price * storedItem.qty;
    //   this.totalQty++;
    //   this.totalPrice += storedItem.item.price;
  };

  // this.removeItem = function(id) {
  //   this.totalQty -= this.items[id].qty;
  //   this.totalPrice -= this.items[id].price;
  //   delete this.items[id];
  // };

  this.generateArray = function() {
    var arr = [];
    for (var id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};
