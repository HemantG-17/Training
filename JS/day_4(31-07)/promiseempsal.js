let employees = [
    {
        id: 1,
        name: "Ram",
        post: 'Professor'
    },
    {
        id: 2,
        name: "Shyam",
        post: 'Professor'
    },
    {
        id: 3,
        name: "Mohan",
        post: 'Lecturer'
    }
]
function getEmp(id) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let emp = employees.find((employee) => employee.id == id);
            if (emp) {
                resolve(emp);
            } else {
                reject("Employee not found...");
            }
        }, 3000)
    });
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            let basicSalary;
            if (post === "Professor") {
                basicSalary = 50000;
            } else if (post === 'Lecturer') {
                basicSalary = 40000;
            } else {
                basicSalary = 30000;
            }
            resolve(basicSalary);
        }, 3000)
    });
    return pr;
}
function calculateSalary(bs) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            let grossSalary = bs + bs * .8 + 8000;
            resolve(grossSalary);
        }, 3000)
    });
    return pr;
}
getEmp(1)
    .then((emp) => getBasicSalary(emp.post))
    .then((basicSalary) =>calculateSalary(basicSalary))
    .then((grossSalary) => console.log(grossSalary))
    .catch((err) => console.log(err))
