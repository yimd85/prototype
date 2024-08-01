
//*****************************************
// prototype inheritance
//*****************************************
// inheritance is one object accessing other objects

//*****************************************
// prototype chain
//*****************************************

let arr = ['david', 'olivia'];
let obj = {
    name: 'david',
    city: 'leonia',
    getIntro: function(){
        console.log(this.name + ' from ' + this.city )
    }
}

// if we arr.__proto__ we can see all methods and properties
// same as Array.prototype

// if we obj.__proto__ we can see all methods and properties
// same as Object.prototype

// prototype chain is best exampled using 
arr.__proto__.__proto__
//this is why everything is an object because everything down the prototype chain in JS is an object


//*****************************************
// Function.prototype
//*****************************************
function fun(){}
function fun2(){}
//setting Function.prototype mybind (the function) will give all the functions access to this method called mybind
Function.prototype.mybind = function(){
    console.log('prototype mybind')
}

fun.__proto__.mybind(); // prototype mybind
fun2.mybind(); // prototype mybind