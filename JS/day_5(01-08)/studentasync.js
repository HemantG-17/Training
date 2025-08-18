let Students = [
    {
        rollNo: 1,
        name: 'Hemant',
        branch: "IT",
        Marks: {
            sem1: 70,
            sem2: 80,
            sem3: 60,
        }
    },
    {
        rollNo: 2,
        name: 'Aryan',
        branch: "IT",
        Marks: {
            sem1: 40,
            sem2: 50,
            sem3: 60,
        }
    },
    {
        rollNo: 3,
        name: 'Kapil',
        branch: "IT",
        Marks: {
            sem1: 70,
            sem2: 80,
            sem3: 60,
        }
    }, {
        rollNo: 4,
        name: 'Lokesh',
        branch: "IT",
        Marks: {
            sem1: 70,
            sem2: 80,
            sem3: 60,
        }
    },
    {
        rollNo: 5,
        name: 'Kamil',
        branch: "IT",
        Marks: {
            sem1: 70,
            sem2: 80,
            sem3: 60,
        }
    }
]
let newStudent = {
    rollNo: 6,
    name: 'Khushi',
    branch: "Cs",
    Marks: {
        sem1: 70,
        sem2: 80,
        sem3: 60,
    }
}
function addStudent(newStudent) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (newStudent.branch == "") {
                reject("cannot be added as not branch is not found")
            } else {
                Students.push(newStudent);
                resolve(Students)
            }
        }, 3000)
    });
    return pr;
}
function findStudent(rollNo) {
    let pr = new Promise((resolve, reject) => {
        setTimeout(() => {
            let student = Students.find((student) => student.rollNo === rollNo)
            if (student) {
                resolve(student)
            } else {
                reject("student not found")
            }
        }, 3000);
    })
    return pr;
}
function calMarks(student) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            if (student) {
                let totalMarks = student.Marks.sem1 + student.Marks.sem2 + student.Marks.sem3;
                resolve(totalMarks);
            } else {
                reject("no student found")
            }
        }, 3000)
    });
    return pr;
}

 let students = await addStudent(Students)
  console.log(students)
 let student = await findStudent(students[1].rollNo)
 console.log(student)
 let totalMarks = await calMarks(student)
 console.log(totalMarks)
