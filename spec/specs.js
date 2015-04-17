describe("PizzaType", function(){
    describe("cost()",function(){
        it("calculates cost for 2 quantity", function(){
        var pizza1 = Object.create(PizzaType);
        pizza1.init();
        
        pizza1.quantity = 2;
        expect(pizza1.cost()).to.equal(40);
    });
  });

  describe("cost()",function(){
      it("calculates cost for 1 quantity", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.type = "pepporoni";
      pizza1.quantity = 1;
      expect(pizza1.cost()).to.equal(20);
  });
});

    describe("cost()",function(){
        it("calculates cost for 1 quantity", function(){
        var pizza1 = Object.create(PizzaType);
        pizza1.type = "cheese ";
        pizza1.quantity = 1;
        expect(pizza1.cost()).to.equal(15);
    });
    });

    describe("cost()",function(){
        it("calculates cost for 1 quantity", function(){
        var pizza1 = Object.create(PizzaType);
        pizza1.type = "cheese ";
        pizza1.quantity = 3;
        expect(pizza1.cost()).to.equal(45);
    });
    });


});
