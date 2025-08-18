let emp = {
    id: 1,
    name: 'Ram kumar',
    mobile: 8585927853,
    post: 'professor'
}
let emp1 = getEmp(1);
console.log(emp1, 'emp1');
let bs = getbasicSalary(emp1.post);
console.log(bs, 'basic salary')
let grossSalary = calclateSalary(bs);
console.log(grossSalary)

function getEmp(id) {
    setTimeout(() => {
        return {
            id: 1,
            name: 'Ram kumar',
            mobile: 8585927853,
            post: 'professor'
        }
    }, 3000)

}

function getbasicSalary(post) {
    if (post == "professor") {
        return 50000;
    }
    else if (post == 'lacturer') {
        return 40000;
    }
    else {
        return 30000;
    }
}

function calclateSalary(bs) {
    return bs + bs * .25 + 7000;
}
