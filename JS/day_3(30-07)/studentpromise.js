let students = [
    {
        name: 'hemant',
        age: 13,
        marks: 43
    },
    {
        name: "mohan",
        age: 13,
        marks: 65
    }, {
        name: "Niklhil",
        age: 12,
        marks: 54
    },
    {
        name: "Sartaaj",
        age: 13,
        marks: 70
    }
]
function findMaxMarks() {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            let maxMarks = students[0].marks;
            let student;
            for (let i = 0; i < students.length; i++) {
                if (students[i].marks > maxMarks) {
                    maxMarks=students[i].marks;
                    student = students[i];
                }

            }
            resolve(student);
        }, 3000)
    })
    return pr;
}
findMaxMarks().
    then((student) => {
        console.log(student)
    })