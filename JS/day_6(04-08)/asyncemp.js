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
            let employee = employees.find((employee) => employee.id == id);
            if (employee) {
                resolve(employee)
            } else {
                reject("Employee not found")
            }
        }, 3000)

    })
    return pr;
}
function getBasicSalary(post) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let basicSalary;
            if (post === "") {
                reject('Invalid Employee');
            } else {
                if (post == 'Professor') {
                    basicSalary = 50000
                } else (post == 'Lecturer')
                {
                    basicSalary = 40000;
                }
                resolve(basicSalary)
            }

        }, 3000);
    });
    return pr;
}
function getGrossSalary(basicSalary) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            let gs = basicSalary + basicSalary * .90 + 8000;
            resolve(gs)
        }, 3000)
    });
    return pr;
}


async function manageEmployee() {
    try {
        let employee = await getEmp(1)
        console.log(employee);
        let basicSalary = await getBasicSalary(employee.post);
        console.log(basicSalary);
        let grossSalary = await getGrossSalary(basicSalary)
        console.log(grossSalary)
    } catch (err) {
        console.log(err)
    }
}
manageEmployee();