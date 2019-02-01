

function Pizza(size, toppings) {
  this.size = size
  this.toppings = toppings
}

Pizza.prototype.price = function() {
   var p = 3
   if (this.size == "Small") {
     p += 1
   } else if (this.size == "Medium") {
     p += 2
   } else if (this.size == "Large") {
     p += 4
   }

   var t = this.toppings.length;
   p += t

   return p;

}

$(document).ready(function() {

  $("#form").submit(function(event){
      event.preventDefault();

      var s = ($('#size :selected').text());

      var t = []

      $("input:checked[name=topping]").each(function(){
        t.push($(this).val());
      });

      var za = new Pizza(s, t)

      alert(za.price())

  });
});
