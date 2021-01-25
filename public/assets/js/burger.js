$(document).ready(function() {
    // handle the submission of burgers
    $("#text-enter-button").on("click", function(event) {
        // prevent form from actually submitting
        event.preventDefault();
        
        // bring in new uneaten burger
        var createBurger = {
            burger_name: $("#enter_text").val(),
            devoured: 0
        };

        // call api route to handle the addition of the new burger
        $.ajax("/api/burgers", {
            type: "POST",
            data: createBurger
        }).then(function() {
            location.reload();
        });
    });

    // handle burgers being clicked on
    $(".eatBurger").on("click", function(event) {
        event.preventDefault();
        
        // get the id of the clicked burger
        let id = $(this).parent().parent().data("id");
        console.log(id);
        // change the boolean value of the burger
        let devouredTrue = {
            devoured: 1
        };

        // create an ajax call to make changes to the burger
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredTrue
        }).then(function() {
            location.reload();

        });
    });

});