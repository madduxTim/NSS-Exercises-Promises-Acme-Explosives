"use strict";
let products = [];
let types = [];
let categories = [];

// var buildProducts = new Promise(function(resolve, reject){
//     $.ajax({
//         url: "products.json"
//     }).done(function(productsData){
//         resolve(productsData.products[0]);
//     });
// }); 
// buildProducts
//     .then(doSomething);
// function doSomething(productArray){
//     console.log("products: ", productArray);
// };

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
    console.log(typesData, typesData.types);
    for (type in typesData.types) {
        var string = "";
        var type = typesData.types[type];
        string += "<div>";
        string += `<p>${type.name}</p>`;
        string += `<p>${type.description}</p>`;
        string += "</div>";
        document.getElementById("output").innerHTML += string;
    }
        console.log("string", string);
}

// var buildCategories = new Promise(function(resolve, reject){
//     $.ajax({
//         url: "categories.json"
//     }).done(function(categories) {
//         resolve(categories);
//     });
// });
// buildCategories
//     .then(addTypes)
// function addTypes(categories) {
//     console.log("categories: ", categories);
// }

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