//Object, example subscriptioncustomer
let exampleCustomer = {
    firstName: 'Mark',
    lastName: 'Hughes',
    coffeeExp: 'I\'m fairly new to this',
    brewMethod: 'French Press',
    flavour: 'chocolate',
    roastLevel: 'light',
    grind: 'Ground'
}

//Array, list of products 
 let products = ['Product A', 'Product B', 'Product C']

//Object, Question 1: Coffee Expirience
const coffeeExp = {
    a: 'I\'m fairly new to this',
    b: 'I\m a regular coffee drinker',
    c: 'I\m pretty advanced',
    d: 'Coffee Guru'
}

//Array, Question 2: Brew method
const brewMethods = ['French Press', 'Chemex', 'Aeropress', 'Pour Over', 'Moka Pot', 'Espresso Machine']

//Array, Question 3: Flavours 
const flavour = ['Chocolate', 'Fruity', 'Floral', 'Nutty', 'I enjoy a mix!']

//Array, Question 4: Roast level 
const roastLevel = ['Light', 'Medium', 'Dark', 'I defer to you']

//Array, Question 5: Grind 
const grind = ['Ground', 'Whole Bean', 'Both']

//For loop, product names
for(let i =  0; i < products.length; i++){
    console.log(products[i]);
}

//For each loop, product names
brewMethods.forEach(function(brewMethod){
    console.log(brewMethod)
});

//Redirect
//window.locstion.href = 'google.com'
