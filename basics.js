//Q1. Create a file with name basics and show all the features that you know about javascript
//Data types
console.log("1. Data types............")
var dataVar = "Test-Data type" 
console.log(dataVar)
console.log("Data Type of dataVar ", typeof dataVar) 

console.log("2. Condition checking............")
//Condition checking
var var1 = 20
var var2 = 20

var1==var2 ? console.log("var1 and var2 are  equal") : ("var1 and var2 are not equal")



console.log("3. Named function............")
var myName="Mayuri"
//Named function
function calc(params) {
    console.log(params)
    console.log(this.myName)  //undefined
}
calc(myName)

console.log("4. Constructor function............")
function concat(name1, name2) {
    this.name1 = name1,
    this.name2 = name2

    this.concatenatedString = function() {
        return this.name1 + this.name2
    }
}

var resultString = new concat("User1", "User2")
console.log("Concatenated string: " + resultString.concatenatedString())

console.log("4. Overloading............")
PrintName();  //prints undefined undefined. PrintName(param1, param2)  gets hoisted

function PrintName(param1) {
    console.log("1 - ", param1)
}
PrintName("Name1");

function PrintName(param1, param2) {
    console.log("2 - ", param1, param2)
}
PrintName("Name1", "Name2");

//Hoisting---partial compiling
console.log(testVar)   //prints undefined
var testVar = "Test of hoisting"



//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767
var var1 = "Robert "
var1 = 0.0266
var1 = false
var1 = {myname : "Test Me"}
var1 = undefined
console.log("Q2. Printing variable values: ",  var1)
var1 = true
var1 = "Robert Jr."
var1 = null
var1 = {}
var1 = 32767
console.log("Q2. Printing variable values: ",  var1)


console.log("Q3. Printing name: ")
//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

function printMyName(firstName, lastName, age) {
    console.log("First Name:", firstName, "Last name:", lastName, "And age:" , age)
}
printMyName("Julia", "Roberts", "50")

//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind
console.log("Q4. Addition calculation: ")
function doAddition(a, b, c) {
    return a+b+c
}
var result = doAddition(2,3,4)
console.log("Addition with 2,3,4 is:", result) //shows 9
result = doAddition(2)
console.log("Addition with 2 is:", result) //shows NaN because no values are passed for parameters b and c so defalut value undefined is assigned to them . Adding undefined and number 2 results in NaN.
result = doAddition(2.3,3)
console.log("Addition with 2.3,3 is:", result) //shows NaN because no value is passed for parameter c so defalut value undefined is assigned to it . Adding undefined and number  results in NaN.
result = doAddition("first", 2, "three")
console.log("Addition with first, 2, three: ", result) //shows first2three because it concatenates first,three strings, converts 2 in string as well and concatenates final result with string

//Q5. Give me an example of your choice on closure, objects, prototype, each.
console.log("Q5. Example of closure-")
function Employee(empName, empId){
    var name = "Rosario"
    var id = 6
    var empSal = "$10000" 


    var salary = function() { 
        if(name == empName && id == empId) {
            return {
                empSal : empSal
            }
        }
    }

    return salary;
}

var empDetails = Employee("Rosario", "6") 
console.log(empDetails())  //prints { empSal: '$10000' }

var empDetails = Employee("Mayuri", "6") 
console.log(empDetails())//prints undefined


console.log("Q5. Example of object-")
var employee = {  //Employee object with properties empName, empId and function getSalary.
    empName: "Sarah",
    empId: 20,
    getSalary: function() {
        return 10000
    }
}
console.log("Employee Sarah's salary is:-" ,employee.getSalary())


console.log("Q5. Example of prototype-")

function Vehicle (name) {
	this.name = name
    Vehicle.prototype.company = "Honda"    //prototyping company name for each Vehicle thats created using this constructor
}

var vehicle1 = new Vehicle("Car")
console.log(vehicle1.name)
console.log(vehicle1.company)

