function simulateTask(time: number): Promise<string>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            resolve('Task done')
        }, time)
        setTimeout(()=> {reject('Tase no done')}, time + 1000)
    })
}

simulateTask(200).then((res)=> {console.log(res)})