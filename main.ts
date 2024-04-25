//          100 days of coding challenge ( DAY 38 )

// Question 01  
// --Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
let countries = new Map();
countries.set("Farance","Paris");
countries.set("India","Delhi");
countries.set("afganistan","Qabul");
console.log(countries)
// --Logs the Map with the countries and their capitals.
// Question 02
var country = new Map();
country.set("USA", "Washington, D.C."); // Adds USA to the Map
country.set("France", "Paris"); // Adds France to the Map
country.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(countries);
// Logs the Map with the countries and their capitals.
// ***Answer of Q13:
// This function checks for "Canada" in the Map and logs its capital
function logCapitalOfCanada(country: Map<any, any>) {
    if (country.has("Canada")) {
        console.log("The capital of Canada is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
// Assuming countries Map from Question 112
logCapitalOfCanada(countries);
// --Checks if Canada is in our Map and logs the capital if it exists.
// Question 03 
// --Creates a Map to store student IDs (keys) and names (values)
let students = new Map();
students.set(1, "Ram");
students.set(2, "Shyam");
students.set(3, "Mahi");
// --Iterates over the Map and logs each student ID and name
students.forEach(function(name,id){
console.log("Student ID:".concat(id, ",Name:").concat(name));
});