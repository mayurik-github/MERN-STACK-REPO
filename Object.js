//create one object with name person, and inherit it to Student and create two new 
//properties and one new method pls use both ways of inheritance

var Person = {
    Name: "Person1",
    Phone: 123456789,
    City: "City1",
    GetPersonInfo: function() {
        return this.Name + " " + this.Phone + " " + this.City
    }
}
console.log("Printing Person object..." , Person.GetPersonInfo())

//Method 1 inheritance using new Object
var Student1 = new Object(Person)
Student1.studentName = "First student"
Student1.country = "USA"
Student1.grade = "A"
Student1.GetGrades = function() {
    return "Student grade is: " + this.grade;
}
console.log("Printing Person object using inheritance method 1..." , Student1.GetPersonInfo())
console.log("Printing Student1 object using inheritance method 1..." , Student1.GetGrades())

//Method 2 inheritance using Object.create
var Student2 = Object.create(Person)
Student2.ID = 100;
Student2.schoolName = "Some High school";
Student2.GetStudentInfo = function() {
    return this.ID + " " + this.schoolName + " " + this.Name + " " + this.Phone 
                    + " " + this.City
}
console.log("Printing person info using Student object..." + Student2.GetPersonInfo());
console.log("Printing student info..." + Student2.GetStudentInfo());
console.log(Student2.__proto__)
