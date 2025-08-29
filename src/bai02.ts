function returnNumber(): Promise<number>{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(10) 
        }, 1000)
    })
}

returnNumber().then((res)=>{console.log(res)})