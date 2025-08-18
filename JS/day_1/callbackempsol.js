let emp = {
    id: 1,
    name: 'Ram kumar',
    mobile: 8585927853,
    post: 'professor'
}
getEmp(1, (emp) => {
    console.log(emp)
    getbasicSalary(emp.post, (bs) => {
        console.log(bs)
        calclateSalary(bs, (gs) => {
            console.log(gs);
        })
    })
});
function getEmp(id, callback) {
    setTimeout(() => {
        console.log(id);
        callback({
            id: 1,
            name: 'Ram kumar',
            mobile: 8585927853,
            post: 'professor'
        })
    }, 3000)

}
function getbasicSalary(post, callback) {
    setTimeout(() => {
        if (post == "professor") {
            callback(50000);
        }
        else if (post == 'lacturer') {
            callback(40000);
        }
        else {
            callback(30000);
        }

    }, 3000)

}

function calclateSalary(bs, callback) {
    callback(bs + bs * .25 + 7000);
}
