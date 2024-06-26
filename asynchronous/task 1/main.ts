//               Assignments--ASYNCHRONOUS

//--------------TASK NO 1 ------------------

/*Write a simple asynchronous TypeScript function fetchGreeting that returns a greeting message after a 2-second delay using setTimeout.

*/

async function fetchGreeting(){

    return new Promise((resolve, reject) => {
    
    setTimeout(()=>{
    
    resolve("Here is my Asynchronous project!")
    
    }, 2000);
    
    })
    };
    
    fetchGreeting().then((result)=> { console.log(result)});