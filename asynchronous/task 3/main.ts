//--------------- TASK NO 3 ------------------

/*Write a function fetchData that returns a Promise which resolves with the string "Data fetched successfully!" after a delay of 1 second.

*/

function fetchData(){

    return new Promise((resolve, reject)=>{
    
    setTimeout(()=>{ resolve("Data fetched successfully!") }, 1000);
    
    })
    
    };
    
    fetchData()
    
    .then((res)=> { console.log(res)});