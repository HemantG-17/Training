let counrtryNames=['India','Germany','Japan','USA']
function name(){
    let pr=new Promise((resolve)=>{
        setTimeout(() => {
            resolve(counrtryNames[2]);
        },3000);
    });
    return pr; 
}
name().
then((result)=>{
    console.log(result)
})
