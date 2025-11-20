//sample porgram for throttling

// let counter = 1;
// const getData = function () {
//     //calls an API and gets Data
//     console.log("fetching data...", counter++);
// }
// function throttle(fn, delay) {
//     let flag = true;
//     return function () {
//         if (flag) {
//             fn.call(this);
//             flag = false;
//             setTimeout(() => {
//                 flag = true;
//             }, delay);
//         }
//     }
// }
// const getSuggestion = throttle(getData, 2000);

// complete program for throttling
let counter = 1;
const getData = function (type) {
    //calls an API and gets Data
    console.log("fetching data..." + " " + type + " " + counter++);
}
function throttle(fn, delay, ...params1) {
    let flag = true;
    return function (...params2) {
        if (flag) {
            fn.apply(this, [...params1, ...params2]);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }
    }
}
const getSuggestion = throttle(getData, 2000, "Suggestions");