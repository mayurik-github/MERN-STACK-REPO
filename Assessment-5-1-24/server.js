//Assessment NodeAPI and ES6 - 01-May-2024

//1. Create a setup for Express Web Server
console.log("\n1. Create a setup for Express Web Server");
const expressServer = require('express')
const port = 9090
const testApp = expressServer();

testApp.get('/', function (req, res) {
    res.send('Hello World')
  })



//2. Configure a route name - Student
//http://localhost:8089/student/
//http://localhost:8089/student/info

//Added Routers/studentRoute.js

//3. Create a express app and configure in server.js to delegate routes with - "Student"
console.log("\n3. Create a express app and configure in server.js to delegate routes with - Student");
const studentRoute = require("./Routers/studentRoute");
const { error } = require('console');
const studentApp = expressServer();
testApp.use("/student", studentApp)
studentApp.use(studentRoute)

testApp.listen(port)
console.log("Server launched at port " + port)

//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string
//Created getStudentDetails in Routers/studentRoute.js

//5. Save this information received in #4  to a file named studentIfo using fs module async way
//Created saveStudentDetails in Routers/studentRoute.js to save it to studentInfo.txt

//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
console.log("\n6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc");

let mapExample = new Map();
let keyString = "KeyStr1"
mapExample.set(keyString, "This is String key for map..")
console.log(mapExample.get(keyString))

let keyObject = new Object()
mapExample.set(keyObject, "This Object key for map...")
console.log(mapExample.get(keyObject))

let keyFunction = function() {}
mapExample.set(keyFunction, "This is Function key for map...")
console.log(mapExample.get(keyFunction))

let keyNum = 10;
mapExample.set(keyNum, "This is Number key for map...")
console.log(mapExample.get(keyNum))

console.log([...mapExample.entries()])

mapExample.delete(10)
console.log([...mapExample.entries()])

mapExample.clear()

//set
let setExample = new Set(["Product1", "Product2","Product3","Product4"])
console.log(setExample.entries())

setExample.add("Product5")
console.log(setExample.entries())

setExample.delete("Product3")
console.log(setExample.entries())

console.log(setExample.has("Product5"))
console.log(setExample.has("Product3"))

//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
console.log("\n7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved");
let es6featuresObject = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
          status : "Success",
          es6features : "1.let keyword \n 2. Arrow functions \n3. Default param \n 4. Generator function \n5. Promises",
          code : 200
        })
    }, 2000);

    setTimeout(() => {
        reject({
          status : "Error",
          es6features : "It failed to return ES6 features.",
          code : 500
        })
    }, 3000);
})

es6featuresObject.then((res, error) => {
  console.log("Promise is successful  ", res)
}).catch((res, error)=> {
  console.log("Promise failed  ", res)
})

console.log(es6featuresObject)
console.log(es6featuresObject)


//8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
console.log("\n8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)");
let multiplyNumbers = (...numbers) => {
  let result = 1;
  for(let i in numbers) {
      result = result * numbers[i]
  }
  return result
}
console.log("Spread and rest operator to multiply numbers...", multiplyNumbers(1,2,3,45))


//9. Use the question #7 to build promises using async and await - with multithread
console.log("\n9. Use the question #7 to build promises using async and await - with multithread");
function es6features() {
  return new Promise((resolve, reject) =>{
      setTimeout(() => {
          resolve({
            status : "Success",
            es6features : "1.let keyword \n 2. Arrow functions \n3. Default param \n 4. Generator function \n5. Promises",
            code : 200
          })
      }, 2000);

      setTimeout(() => {
            reject({
              status : "Error",
              es6features : "It failed to return ES6 features.",
              code : 500
            })
        }, 3000);
    })
}

  async function asyncCallES6Features() {
    console.log("Async call starts...")

    await es6features().then((res, error) => console.log(res))
                                .catch((err) => console.log(err))
    console.log("After await 1...")

    await es6features().then((res, error) => console.log(res))
    .catch((err) => console.log(err))

    console.log("After await 2...")
  }
  asyncCallES6Features()

//10. Create an example of generator function of your choice
console.log("\n10. Create an example of generator function of your choice");
function* generateNumbers() {
  let id = 1;
  while(true) {
    yield id;
    id++;
  }
}
let numbers = generateNumbers()
console.log(numbers.next())
testApp.get("/generateNumbers", (req, res) => {
  res.json(numbers.next());
});