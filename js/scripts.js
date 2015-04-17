var PizzaType = {
    type:"",
    quantity:1,
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

// $(document).ready(function() {
//
//     var pizza = Object.create(PizzaType);
    // $("form#to-do-form").submit(function(event) {
    //
    //     event.preventDefault();
    //
    //     var name = $("#list-item-name").val();
    //
    //     task.list = name;
    //
    //     $("#show-lists").show();
    //     $("ul#list-items").append("<li><span class='list-item'>" + name + "</span></li>");
    //
    //
    //     $("#list-item-name").val("");
    //
    //     $(".list-item").last().click(function(){
    //         $("#show-tasks").show();
    //
    //     });
    //
    // });
    //
    // $("form#form-task").submit(function(event){
    //     event.preventDefault();
    //     var task_name = $("#task-item-name").val();
    //     task.task_array.push(task_name);
    //     $("ul#task-items").append("<li><span class='task-item'>" + task_name + "</span></li>");
    //     $("#task-item-name").val("");
    //     //("#show-tasks").hide();
//
//     });
//
// });
