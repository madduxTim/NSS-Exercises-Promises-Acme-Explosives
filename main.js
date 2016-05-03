"use strict";
(function(){  
    var allData = [];
    $( document ).ready(function() {
        // CALLING AND THEN DISPLAYING PRODUCTS // 
        var callProducts = new Promise(function(resolve){ // PRACTICE WITH REJECT 2ND ARG OR .CATCH METHOD
            $.ajax({
                url: "products.json"
            }).done(function(productsData){
                resolve();
                allData.push(productsData.products[0]); 
            });
        }); 
        callProducts
            .then(callTypes) 
            .then(callCategories)

        // CALLING TYPES //
        var callTypes = new Promise(function(resolve){
            $.ajax({
                url: "types.json"
            }).done(function(typesData) {
                resolve();
                allData.push(typesData.types);
                console.log(typesData.types[4].description);
                // console.log(typesData);
                // console.log(allData[0], allData[1], allData[2]);
            });
        });

        // CALLING CATEGORIES // 
        var callCategories = new Promise(function(resolve){
            $.ajax({
                url: "categories.json"
            }).done(function(categoriesData){
                resolve(categoriesData);
                allData.push(categoriesData.categories);
                // console.log(allData[0], allData[1], allData[2]);
            });
        }); 
        callCategories
            .then(toDom)

        function toDom() {
            console.log(allData[0], allData[1], allData[2]);
            console.log(allData);
            for (var product in allData[0]) {
                var string = "";
                var productKey = allData[0][product];
                string += "<div class='col-md-2 card'>";
                string += `<p class="badge category">Category: ${productKey.type}</p>`; // PATCH IN CATEGORIES
                string += `<p class="badge typeName">Type: ${productKey.type}</p>`; // PATCH IN TYPES
                string += `<p class="productName">${productKey.name}</p>`;
                string += `<p>${productKey.description}</p>`;
                string += `<p class="badge productID">ID number: ${productKey.id}</p>`; // PRODUCT ID. NOT SURE I NEED IT. 
                string += "</div>";
                $("#output").append(string);
            }
            // $(".category").html(allData[0].susan.id);
            replaceStuff();
        };

        function replaceStuff() {
            if ($(".typeName").html("1")) {
             $(".typeName").replaceWith("<p class='badge typeName'>Funky Town</p>");
            };
        };

        // SELECTOR THINGY // 
        $("#selector").change(function(){
            if ($("#selector").val()==="Demolition") {
                console.log("demo!");
                // Call function to load demos;
            } else if ($("#selector").val() === "Fireworks") {
                console.log("fuego trabajos");
                // call function to load fireworks;
            };
        });

    }); // <---- .READY() 
})(); // <----- IIFE 