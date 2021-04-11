// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
let fruits = [];
function Fruit(name, color, priceperkg) {
    this.name = name;
    this.color = color;
    this.priceperkg = priceperkg;
    this.getProperties = function() {
      return `Colour is ${color} and PricePerKg is ${priceperkg}`;
    };
}

fruits.push(new Fruit('Apple', 'Red', '140'));
fruits.push(new Fruit('Banana', 'Yellow', '40'));
fruits.push(new Fruit('Pomegranate', 'Red', '120'));

function getDetails(fruits, name){
    let properties;
    if(Array.isArray(fruits) && name !=='undefined' && name!==''){
      for(let element of fruits){
        if(element.name.toLowerCase()===name.toLowerCase())
            console.log(element.getProperties())
             }
         }         
    else
          console.log("Invalid input...!!")
    }

getDetails(fruits,'Banana');