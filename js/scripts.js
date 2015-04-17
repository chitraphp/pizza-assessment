var PizzaType = {
    init:function(){
        this.type = "pepporoni";
        this.quantity = 1;
    },
    cost:function(){
        if(this.type === "pepporoni"){
            this.cost = this.quantity * 20;
            return this.cost;
        }
        else {
            this.cost = this.quantity * 15;
            return this.cost;
        }
    }
}

$(document).ready(function() {

    var pizza = Object.create(PizzaType);
    $("form#pizza-form").submit(function(event) {

        event.preventDefault();
        var order ={};

        var variety = $("#pizza-type").val();

        var total = $("#quantity-pizzas").val();
        if(variety in order){
            order[variety] += total;
        }
        order[variety] = total;
        pizza.type = variety;
        pizza.quantity = total;
        var amount = [];
        var cost1 = pizza.cost();
        //alert(cost1);
        //amount.push(cost1);

        //alert(amount[0]);

        $("#show-pizzas").show();
        $("ul#pizza-details").append("<li><span class='type'>" + pizza.type +
        "</span>  <span class='no-of'>" + pizza.quantity+ "<span>"  + cost1 + "</span></span></li>");

        $("#pizza-type").val("");
        $("#quantity-pizzas").val("");



    });

    // $("form#form-task").submit(function(event){
    //     event.preventDefault();
    //     var task_name = $("#task-item-name").val();
    //     task.task_array.push(task_name);
    //     $("ul#task-items").append("<li><span class='task-item'>" + task_name + "</span></li>");
    //     $("#task-item-name").val("");
    //     //("#show-tasks").hide();
    //
    // });

});
