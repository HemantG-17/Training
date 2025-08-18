const salary=require("../../salary")
function manageSalary(){
let a=salary.grossSalary(20000)
console.log(a)
let b=salary.grossSalaryfaculty(25000)
console.log(b)
}
module.exports={
    manageSalary,
}