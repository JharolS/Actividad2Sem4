async function doTask() {
    let launching = new Promise((resolve) => {
        let listNumber = [];
        let intent = 10;
        while (intent > 0) {
            let number = Math.trunc(Math.random() * (7 - 1) + 1);
            if (number < 6) {
                listNumber.push(number)
            } else {
                return ;
            }
            intent --;
            resolve(listNumber);
        }
        })   
    let results = await launching;
    for (let i = 1; i < results.length; i++) {
        console.log(`${i}° Launching, ${results[i]}`);
    }
}

doTask();