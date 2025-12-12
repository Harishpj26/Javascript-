Function.prototype.myCall = function(object,...args) {
    if(typeof this !== "function") throw new Error(this + " It is not callable");
    object.fn=this;     // this points to the function it is called
    object.fn(...args);
}
const student1 = {
    name:"Harish",
    age:20,
    getStudentDetails : function() {
        console.log(this.name+" "+this.age);
    }
};
const student2 = {
    name:"Titan Sojo",
    age:9
}

student1.getStudentDetails.myCall(student2);

Function.prototype.myApply = function(object,args) {
     if(typeof this !== "function") throw new Error(this + " It is not callable");
     if (!Array.isArray(args)) throw new Error("Second argument must be an array");
     object.fn=this;
     object.fn(...args);
}
const car1 = {
    carName: "BMW",
    price :"2M" ,
    getCarDetails : function (args) {
        const { owner, date } = args;
        console.log(this.carName+" "+this.price+" "+"Owner:"+owner+" Date of purchase:"+date);
    }
}
const car2 = {
    carName:"Lambogini",
    price:"3M"
}
const curstomer ={date:"JAN2026",owner:"HARISH"};
car1.getCarDetails.myApply(car2,[curstomer]);