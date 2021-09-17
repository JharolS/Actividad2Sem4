async function doTask() {
    let launching = new Promise((resolve, reject) => {
        let listNumber = [];
        let intent = 10;
        setTimeout(() => {while (intent >0) {
            intent --;
            let number = Math.trunc(Math.random() * (7 - 1) + 1);
            if (number < 6) {
                listNumber.push(number)
            } else {
                return ;
            }
            resolve(listNumber);
        }
        })})
        
    let results = await launching;
    results.map((result) => {
            console.log(result);
    })
}

doTask();