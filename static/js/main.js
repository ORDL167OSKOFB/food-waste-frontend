$(document).ready(function() {

const backendURL = "https://foodwaste-backend.azurewebsites.net/";
const selectURL = "https://40268037selectfood.azurewebsites.net/";


//    Try initializing (maybe move this out of the frontend)
    $.ajax({
        url: backendURL + '/init-food',
        type: 'POST',
        contentType: 'application/json',
        success: function(response) {
            console.log("Table created successfully:", response.message);
        },
        error: function(error) {
            console.error("Error creating table:", error);
        }
    });
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

                setTimeout(function(){
                    $("#result").html("");
                }, 5000);
            },
            error: function(error) {
                console.error(error);
                $("#result").html("An error occurred while adding the food.");
            }
        });

        return false;
    });

  


    $("#selectFoodForm").submit(function(event) {

        event.preventDefault();
        let data = {
            foodName: $("#selectFoods").val()
        };
        $.ajax({
            url:selectURL + "/return_foods",
            async: true,
            type: 'GET',
            data: data,
            contentType: 'application/json',
            success: function(response) {
                $("#result").html(response.message);

                setTimeout(function(){
                    $("#result").html("");
                }, 5000);
            },
            error: function(error) {
                console.error(error);
                $("#result").html("An error occurred while selecting the food.");
            }
        });

       
        return false;

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

                setTimeout(function(){
                    $("#result").html("");
                }, 5000);
            },
            error: function(error) {
                console.error(error);
                $("#result").html("An error occurred while updating the food.");
            }
        });

        return false;
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

                    setTimeout(function(){
                        $("#result").html("");
                    }, 5000);
                },
                error: function(error) {
                    console.error(error);
                    $("#result").html("An error occurred while deleting the food.");
                }
            });

            return false;
        });


        $("#myButton").click(function() {
            $.ajax({
                url: backendURL + '/update-food',
                async: true,
                type: 'PUT',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function(response) {
                    $("#result").html(response.message);
    
                    setTimeout(function(){
                        $("#result").html("");
                    }, 5000);
                },
                error: function(error) {
                    console.error(error);
                    $("#result").html("An error occurred while updating the food.");
                }
            });
    
            // return false;
        });
        
        $("#expireSoonForm").submit(function(event) {


                











            return false;
    });





});

