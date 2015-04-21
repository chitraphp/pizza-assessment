describe("PizzaType", function(){
    describe("costPerPizza()",function(){
        it("gives the price for selected type of pepporoni pizza and small size", function(){
        var pizza1 = Object.create(PizzaType);
        pizza1.init();

        pizza1.variety = "pepporoni";
        pizza1.pizzaSize = "small";
        expect(pizza1.costPerPizza()).to.equal(10);
    });
  });

  describe("costPerPizza()",function(){
      it("gives the price for selected type of chicken pizza and the large size", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.init();

      pizza1.variety = "chicken";
      pizza1.pizzaSize = "large";
      expect(pizza1.costPerPizza()).to.equal(22);
   });
  });

  describe("costPerPizza()",function(){
      it("gives the price for selected type of cheese pizza and the medium size", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.init();

      pizza1.variety = "cheese";
      pizza1.pizzaSize = "medium";
      expect(pizza1.costPerPizza()).to.equal(13);
   });
  });

  describe("costPerPizza()",function(){
      it("gives the price for selected type of cheese pizza and the small size", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.init();

      pizza1.variety = "cheese";
      pizza1.pizzaSize = "small";
      expect(pizza1.costPerPizza()).to.equal(9);
   });
  });

  describe("pricePerQuantity()",function(){
      it("gives the price for selected type of three cheese pizzas of medium size", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.init();

      pizza1.variety = "cheese";
      pizza1.pizzaSize = "medium";
      pizza1.quantity = 3;
      expect(pizza1.pricePerQuantity()).to.equal(39);
   });
  });

  describe("pricePerQuantity()",function(){
      it("gives the price for selected type of three cheese pizzas of small size", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.init();

      pizza1.variety = "cheese";
      pizza1.pizzaSize = "small";
      pizza1.quantity = 3;
      expect(pizza1.pricePerQuantity()).to.equal(27);
   });
  });

  describe("pricePerQuantity()",function(){
      it("gives the price for selected type of ten chicken pizzas of medium size", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.init();

      pizza1.variety = "chicken";
      pizza1.pizzaSize = "medium";
      pizza1.quantity = 10;
      expect(pizza1.pricePerQuantity()).to.equal(160);
   });
  });

});
