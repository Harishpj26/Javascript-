//sample program for debouncing

// let counter = 1;
// const getData = function () {
//     //calls an API and gets Data
//     console.log("fetching data...", counter++);
// }
// function debounce(fn, delay) {
//     let timer;
//     let obj = this;
//     return function () {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             fn.call(obj);
//         }, delay);
//     }
// }
// const getSuggestion = debounce(getData, 300);

// complete Implementation of debounce

let counter = 1;
const getData = function (type) {
    //calls an API and gets Data
    console.log("fetching data...for" + " " + type + " " + counter++);
}
function debounce(fn, delay, ...params1) {
    let timer;
    return function (...params2) {
        let obj = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(obj, [...params1, ...params2]);
        }, delay);
    }
}
const getSuggestion = debounce(getData, 300, "suggestions");

