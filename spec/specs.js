describe("PizzaType", function(){
    describe("cost()",function(){
        it("calculates cost for given quantity", function(){
        var pizza1 = Object.create(PizzaType);
        pizza1.type = "pepporoni";
        pizza1.quantity = 2;
        expect(pizza1.cost()).to.equal(40);
    });
  });

  describe("cost()",function(){
      it("calculates cost for given quantity", function(){
      var pizza1 = Object.create(PizzaType);
      pizza1.type = "pepporoni";
      pizza1.quantity = 1;
      expect(pizza1.cost()).to.equal(20);
  });
});

});
