const http = require('http')
const url = require('url');
const myServer = http.createServer((req, res) => {
    let myUrl = url.parse(req.url, true);
    console.log(myUrl, 'url...')
    console.log("first no.", myUrl.query.a)
    let a = (parseInt(myUrl.query.a))
    console.log("second no", myUrl.query.b)
    let b = parseInt(myUrl.query.b)
    console.log("third no", myUrl.query.c)
    let c = parseInt( myUrl.query.c)
    switch (myUrl.pathname) {
        case '/':
            res.end("<h1>Hello this is home page");
            break;
        case '/contact':
            res.end("<h1> this is contact section ");
            break;
        case '/about':
            res.end("<h1> this is about section");
            break;
        case '/simpleinterest':
            let si;
            si = (a * b * c )/ 100;
            res.end("<h1> si=" + si)
            break;
        case '/average':
            let avg;
            avg = (a + b + c )/3;
            res.end("<h1> avg="+ avg)
            break;
        default:
            res.end("<h1> page not found");
    }

})

myServer.listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("server is running on port 3000")
    }
})
