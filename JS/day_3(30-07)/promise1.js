let si = 0;
//now SimpleInterset is asynchronous as it is taking some time
function simpleInterest(p, r, t) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (t < 0) {
                reject("time cannot be negative");
            }
            si = p * r * t / 100;
            resolve(si);
        }, 3000)
    });
    return pr;
}
simpleInterest(1000, 10, -2).
    then((result) => {
        console.log('Simple Interest', result);
    }).catch((err) => {
        console.log(err);
    })
