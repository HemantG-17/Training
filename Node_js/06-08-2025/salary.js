function grossSalary(bs){
    return bs+bs*.90+8000
}
function grossSalaryfaculty(bs){
    return bs+bs*.95+9000
}
module.exports={
    grossSalary,
    grossSalaryfaculty
}