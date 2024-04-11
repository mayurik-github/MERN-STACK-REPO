//Questions for practice
//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

//create an example of const where we can update on property of the object, where it says const is mutable

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 

//1. print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest
let Student = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}
let { FirstName = "Tina", LastName = "Anderson", Session, SessionTopics = "Python,Java,MERN", Covered3 = "ES6"} = Student

console.log("First Name= " , FirstName)
console.log("Last Name = ", LastName)
console.log(Session)
console.log("Session topics= " , SessionTopics)
console.log("Covered3= " , Covered3)
console.log("\n")

//2. multiply function
let Func_Multiply = (a=0,b=0,c=0) => {
    return (a*b*c)
}
console.log("Multiplication of 10,20 and 30 is ", Func_Multiply(10,20,30))
console.log("Multiplication(no arguments)= ", Func_Multiply())
console.log("\n")

//3. create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let number_arr = [1,2,3,4,5]
number_arr.newval = 6

console.log("For in loop")
for(const i in number_arr) {
    const value = number_arr[i]
    console.log("Key = ", i, "Value = ", value)
}

console.log("For of loop")
for(const i of number_arr) {
    console.log("Values are, " , i)
}

console.log("\n")
//4. create an example of const where we can update on property of the object, where it says const is mutable
const Stock = {
    StockName: "ABC"
}
Stock.StockName = "XYZ"
console.log("Stock after update is ", Stock)

console.log("\n")
//5. create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 

for(var i=0; i<4; i++) {
    setTimeout(()=> {
        console.log("Using var to display value after 2s ", i)
    }, 2000)
}
console.log("Variable i is accessible outside for loop (it is declared as var), i= ", i)

for(let j=0; j<4; j++) {
    setTimeout(()=> {
        console.log("Using let to display value after 2s ", j)
    }, 2000)
}
console.log("Variable i is not accessible outside for loop (it is declared as let), j= ", j)
