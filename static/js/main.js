$(document).ready(function() {

const backendURL = "https://foodwaste-backend.azurewebsites.net/";

    $("#addFoodForm").submit(function(event) {
        event.preventDefault();
        let data = {
            foodName: $("#foodName2").val(),
            quantity: $("#quantity1").val(),
            expiryDate: $("#expiryDat1").val(),
            dateAdded: $("#dateAdded").val()
        };
        $.ajax({
            url: backendURL + '/add-food',
            async: true,
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $("#result").html(response.message);
            },
            error: function(error) {
                console.error(error);
                $("#result").html("An error occurred while adding the food.");
            }
        });


    });

  


    $("#selectFoodForm").submit(function(event) {

        event.preventDefault();
        let data = {
            foodName: $("#selectFoods").val()
        };
        $.ajax({
            url: backendURL + '/return-foods',
            async: true,
            type: 'GET',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $("#result").html(response.message);
            },
            error: function(error) {
                console.error(error);
                $("#result").html("An error occurred while selecting the food.");
            }
        });


    });


    $("#reduceQuantityForm").submit(function(event) {
        event.preventDefault();
        let data = {
            foodName: $("#reduceFoodName").val(),
            quantity: $("#reduceQuantity").val(),
            expiryDate: $("#reduceExpiry").val(),
            dateAdded: $("#reducedateAdded").val()
        };
          // Note: method was ori
        $.ajax({
            url: backendURL + '/update-food',
            async: true,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $("#result").html(response.message);
            },
            error: function(error) {
                console.error(error);
                $("#result").html("An error occurred while updating the food.");
            }
        });

    });

        $("#removeFoodForm").submit(function(event) {
            event.preventDefault();
            let data = {
                foodName: $("#removeFoodName").val()
            };
            // Note: method was ori
            $.ajax({
                url: backendURL + '/delete-food',
                async: true,
                type: 'POST', 
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function(response) {
                    $("#result").html(response.message);
                },
                error: function(error) {
                    console.error(error);
                    $("#result").html("An error occurred while deleting the food.");
                }
            });

        });


        $("#expireSoonForm").submit(function(event) {


                












    });





});

