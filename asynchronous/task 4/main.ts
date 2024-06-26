// ---------------- TASK NO 4 --------------

/*Write a function fetchWithError that returns a Promise. It should randomly either resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a delay of 1 second. Handle the rejection using .catch

*/

function fetchWithError(){

    return new Promise((resolve, reject)=>{
    
    setTimeout(()=>{
    
    const randomNumber = Math.floor(Math.random()* 5 + 1)
    
    if (randomNumber < 1) {
    
    resolve("Data fetched successfully!");
    } else {
    reject("Data fetch failed!");
    
    }
    }, 1000)
    })
    };
    fetchWithError()
    .then((resolve)=> { console.log(resolve)})
    
    .catch((reject)=>{console.log(reject)});