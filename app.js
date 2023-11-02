 //javascript objects

 //console.log("Hello class");

 const person={
    firstname:"musango",
    middlename:"wycliffe",
    lastname:"willy",
    age:23,
    hobbies:"football","movies":"cycling",
    email:"musangowilly@gmail.com",
 }
 const personFirstname=person.firstname;
 const personAge=person["age"];

 console.log(personFirstname);
 console.log(personAge);

 //arrays in objects
 
 const dA=[
    ["orange","purple"],
    ["rice","beans",["magi","salt"]]
]

console.log([1][2][1]);