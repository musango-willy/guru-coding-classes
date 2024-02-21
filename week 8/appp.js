//learning fetch API

function obj(name,age,email){
    this.name = name;
    this.age = age;
    this.email =email;
}
const person = new obj("sharon",25,"sharon@gmail.com");

Number('20')

 function fetchData(call){
    setTimeout(function(){call("data fetched")},5000)
 }

 fetchData(function(data){
    console.log(data);
 })

 //promise

 function fetchData(){
   return new Promise(function(resolve,reject)
   setTimeout(function(){
      resolve("promise was meet,data has been fetched")
   },3000)

 }