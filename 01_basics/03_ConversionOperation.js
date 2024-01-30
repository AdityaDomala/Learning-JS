// Converting from number to string

let score = "33"

//console.log(typeof (score));
//console.log(typeof (score));

let valueInNumberBe = Number(score)
//console.log(typeof valueInNumberBe);
//console.log(valueInNumberBe);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// Converting from Number to Boolean 

let ThePersonIsLoggedIn = "1"
let TheBooleanIsLoggedIn = Boolean(ThePersonIsLoggedIn) 
//console.log(TheBooleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true


// Converting Number to String
let someNumber = 33
let stringNumber = String(someNumber)
// console.log(typeof stringNumber);
// console.log(stringNumber);

//Converting Boolean to number 

let userLoggedIn = true
// console.log(typeof userLoggedIn);
let booleanInNumberBe = Number(userLoggedIn)
// console.log(typeof booleanInNumberBe);
// console.log(booleanInNumberBe);


//"Aditya" => NaN
//true => 1
//false => 0


//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Operations^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

let valueBe = 3
let negValueBe = -valueBe
//console.log(-valueBe);

let str1Be = "Hi"
let str2Be = " Aditya"
//console.log(str1Be+str2Be); //or let str3Be = str1Be + strBe and console.log(str3be);

// console.log("1"+ 2); //string display first then number
// console.log("1"+"2" ); //both string 
// console.log(1+"2"+"2"); //number then string the value should be 122
// console.log(1+2+3+"4"+"5"); //again starts with number then the value should be 645
// // this is becuase of the ecma script (the standards)
// console.log(true);
// console.log(+true); // it prints the boolean variable
// console.log(+""); // it prints 0
 

//homework

let gameCounter = 100
gameCounter++;
//console.log(gameCounter);

let x = 3;
let y = x++;
console.log([x],[y]);

// so what really happens is in postfix operations is that first number is presented, and secondly number is added.

// let x =3;
// const y = ++x;
// console.log([x],[y]);

// so what happens is in prefix first addition takes place and then secondly values are assigned