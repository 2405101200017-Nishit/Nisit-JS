const promiseN = new Promise(
    (resolve, reject) => {
        setTimeout(function(){
            console.log('Nishit');
            resolve()
        }, 2000)
    }
)

async function getPromiseN(){
    try{
        const name = await promiseN
    }
    catch(error){
        console.log(error);
        
    }
}