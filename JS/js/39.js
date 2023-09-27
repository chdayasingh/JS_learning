console.log("TUT:39");

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            const error=false;
            if(!error){
                console.log("function:Your promise has been resolved")
                resolve();
            }
            else{
                console.log("function:Your promise has been rejected")
                reject('sorry not fullfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Daya: Thanks for resolving")
}).catch(function(error){
    console.log("Daya: Very bad bro. Reason:",error)
})