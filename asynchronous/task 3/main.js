//--------------- TASK NO 3 ------------------
/*Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

*/
function fetchData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () { resolve("Data fetched successfully!"); }, 1000);
    });
}
;
fetchData()
    .then(function (res) { console.log(res); });
