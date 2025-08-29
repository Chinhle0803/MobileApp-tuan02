function randomNumber(): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(Math.floor(Math.random() * 100))
        }, 15000)
        setTimeout(() => {
            reject('Xay ra loi')
        }, 10000)
    })
}

randomNumber().then((res) => { console.log(res) }).catch((err)=> {console.log(err)})