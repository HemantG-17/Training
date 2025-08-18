let employees = [
    {
        id: 1,
        name: 'Ram',
        mobNo: 8585927
    },
    {
        id: 2,
        name: 'Mohan',
        mobNo: 8675927
    },
    {
        id: 1,
        name: 'Javed',
        mobNo: 8919927
    }
]
function findEmployee(id) {
    let pr = new Promise((resolve, reject) => {

        setTimeout(() => {
            let emp = employees.find((employee) => employee.id === id);
            if(emp) {
                resolve(emp);
            } else {
                reject('employee not find...')
            }
        }, 3000)

    });
    return pr;
}
findEmployee(1).
    then((employee) => {
        console.log(employee)
    }).catch((err) => {
        console.log(err)
    })