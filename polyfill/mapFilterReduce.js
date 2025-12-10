//polyfill for map function
Array.prototype.myMap = function(callbackFunction) {
    let result=[];
    for(let i=0;i<this.length;i++) {
        result.push(callbackFunction(this[i],i,this));
    }
    return result;
}
//polyfill for filter function
Array.prototype.myFilter = function(callbackFunction) {
    let result=[];
    for (let i = 0; i < this.length; i++) {
       if(callbackFunction(this[i],i,this))result.push(this[i]); 
    }
    return result;
}
//polyfill for reduce function
Array.prototype.myReduce = function(callbackFunction,initialValue) {
    let accumulator = initialValue;
    // Important thing about reduce function if we doesnt give initial value then the first value become initalvalue
    for (let i = 0; i < this.length; i++) {
        if(accumulator===undefined && i==0) {
            accumulator=this[0];
            continue;
        }
        accumulator=callbackFunction(accumulator,this[i],i,this);
    }
    return accumulator;
}

function ProductBy2(num) {
    return num*2;
}
function isEvenParity(num) {
    return num%2==0;
}
const nums = [10,20,30,40,50];
console.log(nums.myMap(ProductBy2));
console.log(nums.myFilter(isEvenParity));
console.log(nums.myReduce((acc,curr)=>{
    acc+=curr;
    return acc;
},0));

