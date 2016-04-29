"use strict";
let products = [];
let types = [];
let categories = [];

var buildProducts = new Promise(function(resolve, reject){
    $.ajax({
        url: "products.json"
    }).done(function(productsData){
        resolve(productsData.products[0]);
    });
}); 
buildProducts
    .then(doSomething);
function doSomething(productArray){
    console.log("products: ", productArray);
};

var buildCategories = new Promise(function(resolve, reject){
    $.ajax({
        url: "categories.json"
    }).done(function(categoriesData){
        resolve(categoriesData.categories);
    });
}); 
buildCategories
    .then(showCategories);
function showCategories(categoriesArray){
    console.log("products: ", categoriesArray);
};

var buildTypes = new Promise(function(resolve, reject){
    $.ajax({
        url: "types.json"
    }).done(function(typesData) {
        resolve(typesData);
    });
});
buildTypes
    .then(addTypes)

function addTypes(typesData) {
    for (type in typesData.types) {
        var string = "";
        var type = typesData.types[type];
        string += "<div class='col-md-6 card'>";
        string += `<p>${type.name}</p>`;
        string += `<p>${type.description}</p>`;
        string += "</div>";
        $("#output").append(string);
    }
};

$("#selector").change(function(){
    if ($("#selector").val()==="Demolition") {
        console.log("demo!");
        // Call function to load demos;
    } else if ($("#selector").val() === "Fireworks") {
        console.log("fuego trabajos");
        // call function to load fireworks;
    };
})


/* -------------------- playing around with TreeHouse stuff ------------------- */

// var calculationPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve(1 + 1);
//     }, 1000);
// });

// var calculationPromise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve(1+2);
//     }, 500);
// });

// function addTwo(value){
//     return value + 2;
// }

// function printFinalValue(nextValue){
//     console.log("The final value is ", nextValue);
// }

// calculationPromise
//     .then(addTwo)
//     .then(addTwo)
//     .then(printFinalValue);

// calculationPromise2
//     .then(addTwo)
//     .then(addTwo)
//     .then(printFinalValue);