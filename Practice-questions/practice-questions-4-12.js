let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
let personWithJSTag = persons.filter(person=>person.tags == "javascript")
console.log("Persons with javascript tag..", personWithJSTag)

//2. List the same on person using java and put programmer after their name, change the name key to Developer
let personWithJavaTag = persons.map(({name, tags})=>({"Developer":name + " Programmer", tags})).filter(person=>person.tags == "java")
console.log("Persons with java tag.." , personWithJavaTag)

//3. If we have anyone with tag python
let personWithPythonTag = persons.some(person => person.tags == "python")
console.log("Some person with pyhton tag...", personWithPythonTag)

//4. Find the number of unique tags and their count present in list
let uniqueTagsWithCountOfpersons = persons.reduce((prevVal, currVal, index, array) => {
    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1
    return prevVal
}, [])
console.log("Unique tags and their count is...", uniqueTagsWithCountOfpersons)
