function sayHello(): Promise<string>{
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve('Hello Async')
        }, 2000)
    })

}

sayHello().then((res)=>{console.log(res)})