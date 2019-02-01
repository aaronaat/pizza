

function Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
}

Pizza.prototype.price = function() {
   var p = 3
   if (this.size == "small") {
     p += 1
   } else if (this.size == "medium") {
     p += 2.5
   } else if (this.size == "large") {
     p += 4
   }

   var t = this.toppings.length;
   p += t

   return p;

}



$(document).ready(function() {


});
