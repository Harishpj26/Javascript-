/*  default behaviour is Bubbling target--->parent
*/

// document.getElementById("grandparent").addEventListener('click', () => {
//     console.log("grandparent");
// });
// document.getElementById("parent").addEventListener('click', () => {
//     console.log("parent");
// });
// document.getElementById("child").addEventListener('click', () => {
//     console.log("child");
// });
// function fun(event) {
//     console.log(event);
// }

// This is what it becomes by default ----bubbling
document.getElementById("grandparent").addEventListener('click', () => {
    console.log("grandparent");
}, { capture: false });
document.getElementById("parent").addEventListener('click', () => {
    console.log("parent");
}, { capture: false });
document.getElementById("child").addEventListener('click', () => {
    console.log("child");
}, { capture: false });
function fun(event) {
    console.log(event);
}
