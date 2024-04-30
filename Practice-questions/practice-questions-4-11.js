//Questions :
//Spread Operator - 

//1. create a list of vaccines and print
console.log("\n")
let Vaccines = ["Tetanus", "RSV", "Rubella", "Polio"]
console.log("1. Printing list of vaccines using spread operator:- " , ...Vaccines)

console.log("\n")
//2. create doctor object and print his qualifications and other details using spread
let Doctor = {
    doctor_name: "Donna", 
    city: "Chicago",
    state: "Illinois", 
    qualification: "PhD", 
    specialty: "Internal medicine"}

const DoctorDetails = {...Doctor}   //also called as cloning
console.log("2. Printing Doctor object....", DoctorDetails)

console.log("\n")
//3. create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread
let Vaccine = {
    vaccine_name: "Polio",
    noOfDoses: 2,
    price: 50.00,
    notes: "any other requirements"
}
let NearestVaccineDoctor = {...Doctor, ...Vaccine}
console.log("3. Vaccine details and Nearest doctor to provide the vaccine are....", NearestVaccineDoctor)

console.log("\n")
//4. Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers
let Func_GenerateNumberArray = (start,end) => {
       let numarr = [];
       for(let i = start; i <= end; i++) {
            numarr.push(i)
       }
       return numarr
}
let start = 2
let end = 5
let generateNumArr = Func_GenerateNumberArray(start, end)
console.log("4. Generate array of numbers from start ", start , "to end ", end, " index are...", generateNumArr)
function LargeSum(displayMsg, ...numbers) {
    console.log(displayMsg)
    let sum = 0;
    sum = numbers.reduce((prevVal, currVal)=> prevVal + currVal, 0)
    return sum
}

console.log("Sum of the numbers in the given array is...", LargeSum("Calculate sum of the array...", ...generateNumArr))