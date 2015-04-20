var PizzaType = {
  price:{pepporoni:{small:10, medium:15, large:20},
              chicken:{small:12, medium:16, large:22},
              cheese:{small:9,medium:13, large:15}
  },
  total:function() {
    this.total = (this.cost()) * (this.quantity);
    //this.total = 10 * 5;
    return parseFloat(this.total);
  },
  cost:function(){
     this.cost = this.price[this.variety][this.pizzaSize];

    return parseFloat(this.cost);
  },

  init:function(){
      this.quantity = 2;
      this.variety = "pepporoni";
      this.pizzaSize = "small";
  },
  orderInfo:function(){
    $("#order-table tbody").append("<tr><td>" + this.variety + "</td>" + "<td>" + this.pizzaSize + "</td>" +
    "<td>" + this.quantity + "</td>" + "<td class='pay'>" + this.total() + "</td></tr>");
  }


};

$(document).ready(function() {

    $("form#pizza-form").submit(function(event) {

        event.preventDefault();

        //input information
        var pizzaName = $("#pizza-type").val();
        var noOfPizzas =$("#number-of-pizzas").val();
        var pizzaType = $("#pizza-size").val();

        //creating pizza object
        //alert(pizzaName);
        var pizzaObj = Object.create(PizzaType);
        pizzaObj.init();
        pizzaObj.variety = pizzaName;
        pizzaObj.pizzaSize = pizzaType;
        pizzaObj.quantity = noOfPizzas;

        $("#show-pizzas").show();
        pizzaObj.orderInfo();

        var totalPay = function() {
          var payOrder = 0;
           $("#order-table .pay").each(function(){

            var value = parseInt($(this).text());
            payOrder = payOrder + value;
            alert(payOrder);

          });
          return payOrder;
        };
        $(".final-pay").text(totalPay());
        
      });

});
