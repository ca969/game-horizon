module.exports = function Favorite(oldFavorite) {
  this.items = oldFavorite.items || [];
 

  this.add = function(item, id, count) {
   
    this.items[0] = item;
    
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
