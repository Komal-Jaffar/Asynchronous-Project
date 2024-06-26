// -------------- TASK NO 5 ----------
/*Write a function executeSequentially that executes two functions fetchData and processData sequentially using Promises, and logs the results in the order they are called.*/

function fetchData1(){
return new Promise((resolve) => {

resolve("fetch Data Sucessfully"!)
})
};
function processData2 (data: any){
return new Promise((reject) => {
reject(`Process Data: ${data}`)
})
};
async function executeSequentially(){
try{
let fetchDataResult = await fetchData1()
console.log(fetchDataResult)

let processDataResult = await processData2 (fetchDataResult)
console.log(processDataResult)
}
catch{(Error)
console.log(Error)
}
};

executeSequentially();