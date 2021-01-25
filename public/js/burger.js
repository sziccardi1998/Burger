$(function() {
    // handle the submission of burgers
    $(".create-form").on("submit", function(event) {
        // prevent form from actually submitting
        event.preventDefault();
        
        // bring in new uneaten burger
        var createBurger = {
            burger_name: $("enter_text").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: createBurger
        }).then(function() {
            location.reload();
        });
    });

    $(".eatBurger").on("click", function(event) {
        event.preventDefault();
        
        // get the id of the clicked burger
        let id = $(this).data("id");
        console.log(id);
        // change the boolean value of the burger
        let devouredTrue = {
            devoured: 1
        };

        // create an ajax call
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: devouredTrue
        }).then(function() {
            location.reload();
        });
    });
})