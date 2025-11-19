/*   what is mean by polyfill?
     suppouse we are using old browsers , there is no new features like bind() 
     so we have to write our own bind method. This is want polyfill means
*/

//sample program for polyfill bind method

// Function.prototype.myBind = function (args) {
//      const obj = this;    // this --->current object which it is called [getStudentdetails]
//      return function () {
//           obj.call(args);  //here if we use this.call this becomes error cuz in this function this -->undefined
//      }
// }

// let student1 = {
//      name: "Harish",
//      rollNo: "cb115"
// }

// let getStudentdetails = function () {
//      console.log(this.name + " " + this.rollNo);
// }

// let bindStudentDetails = getStudentdetails.myBind(student1);
// bindStudentDetails();

// Implementation of bind method if the function had some params

// Function.prototype.myBind = function (args) {
//      const obj = this;    // this --->current object which it is called [getStudentdetails]
//      return function (...params) {
//           obj.apply(args, params);  //here if we use this.call this becomes error cuz in this function this -->undefined
//      }
// }

// let student1 = {
//      name: "Harish",
//      rollNo: "cb115"
// }

// let getStudentdetails = function (gender, state) {
//      console.log(this.name + " " + this.rollNo + " " + gender + " " + state);
// }

// let bindStudentDetails = getStudentdetails.myBind(student1);
// bindStudentDetails("Male", "TamilNadu");

//Implementation of bind() if one argument passed while calling bind and another called during new binded function invocation

Function.prototype.myBind = function (...args) {
     const obj = this;    // this --->current object which it is called [getStudentdetails]
     const params1 = args.slice(1);
     return function (...params2) {
          obj.apply(args[0], [...params1, ...params2]); // [...params1,...params2] will flate that array and pass that as single array
     }
}

let student1 = {
     name: "Harish",
     rollNo: "cb115"
}

let getStudentdetails = function (gender, state) {
     console.log(this.name + " " + this.rollNo + " " + gender + " " + state);
}

let bindStudentDetails = getStudentdetails.myBind(student1, "Male");
bindStudentDetails("Tamilnadu");