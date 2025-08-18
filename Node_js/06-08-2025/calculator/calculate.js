const math=require("../math");
function manageCalculator(){
    let a=math.add(10,8);
    console.log(a)
    let b=math.substract(10,8)
    console.log(b);
    let c= math.divide(10,2)
    console.log(c)
}
module.exports={
    manageCalculator,
}