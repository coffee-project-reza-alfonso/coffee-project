"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee col-6 row ">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h2>' + coffee.name + '</h2>';
    html += '<small class="mt-4">' + coffee.roast + '</small>';
    html += '</div>';

    return html;
}


function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// order form - option selection
$("#orderCoffee").click(function(){
    coffees.forEach(function(element){
        console.log(element.name);
        $("#orderCoffee").append($('<option></option>').val(element.name).html(element.name));
    })
})

// order form processing
$("#orderCoffeeBtn").click(function(){
    let coffeeFlavor = $("#orderCoffee").val();
    let size = $("#coffeeSize").val();
    let taxRate = .08;
    console.log(coffeeFlavor);
    console.log(size);
    // prices, consider creating switch statement
    let price;
    let small = 1.99;
    let medium = 2.99;
    let large = 3.99;
    let jumbo = 4.99;
    switch (size){
        case "small":
            price = small +(small * taxRate);
            console.log(price.toFixed(2));
            $("#orderDiv").append(`<h4>Your ${size} ${coffeeFlavor} will come out to $ ${price.toFixed(2)} total.</h4>`);
            break;
        case "medium":
            price = medium + (medium * taxRate);
            console.log(price);
            $("#orderDiv").append(`<h4>Your ${size} ${coffeeFlavor} will come out to $ ${price.toFixed(2)} total.</h4>`);
            break;
        case "large":
            price = large + (large * taxRate);
            console.log(price);
            $("#orderDiv").append(`<h4>Your ${size} ${coffeeFlavor} will come out to $ ${price.toFixed(2)} total.</h4>`);
            break;
        case "jumbo":
            price = jumbo + (jumbo * taxRate);
            console.log(price);
            $("#orderDiv").append(`<h4>Your ${size} ${coffeeFlavor} will come out to $ ${price.toFixed(2)} total.</h4>`);
            break;
        default:
            console.log("error");
            break;
    }


})

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(selectedRoast);
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
    });
    coffeesDiv.innerHTML = renderCoffees(filteredCoffees);
}
// Coffee Search Function

function coffeeSearch(arr){
    var sub = searchInput.value;
    var empty = {
        name: 'something',
    };
    // empty.name = sub.toLowerCase();
    empty.name = sub.charAt(0).toUpperCase() + sub.slice(1);

    var filterCoffee = [];
    arr.forEach(function(element){
        // if(element.name[0] === empty.name[0]){
        if(element.name.includes(empty.name)){
            console.log(empty.name.includes(empty.name));
            for(var i = 0; i < element.name.length;i++){
                console.log(element);
            }
            filterCoffee.push(element);
        }
    })
    coffeesDiv.innerHTML = renderCoffees(filterCoffee);
}
// End of Coffee Search

$("#addCoffeeBtn").click(function(){
    let roastSelection = $("#addCoffeeRoast").val();
    let varCoffee = $("#addCoffee").val();
    let count = coffees.length;
    count += 1;
    console.log(roastSelection);
    console.log(varCoffee);
    let newCoffee = {
        id: count,
        name: varCoffee,
        roast: roastSelection
    };
    console.log(newCoffee);
    coffees.push(newCoffee);
    coffeesDiv.innerHTML = renderCoffees(coffees);
})




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];




var coffeesDiv = document.querySelector('#coffees'); //updated var name
// var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

//start of new code
var searchInput = document.querySelector("#coffeeSearch");
//end of new code
coffeesDiv.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('change', updateCoffees);
roastSelection.addEventListener("change", updateCoffees);

//start of new code
searchInput.addEventListener('keyup', function(){
    // console.log(searchInput);
    coffeeSearch(coffees);
});
//end of new code