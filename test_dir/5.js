const http = require("http");
const fs = require("fs").promises;

// http.createServer((req , res) => {
//     res.writeHead(200 ,{ 'Content-Type': 'text/html; charset=utf-8' });
//     res.write("<h2>Heelo</h2>");
//     res.end('<p>hi</p>');
// }).listen(8081 , () => {
//     console.log("8081 포트에서 대기 중입니다")
// })

http.createServer(async (req , res) => {
    try{
        const data = await fs.readFile("grade.html");
        res.writeHead(200 ,{ 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data); // html 코드가 들어감
    }catch (err)
    {
        console.error(err)
        res.writeHead(500 , { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(err.message);
    }
}).listen(8081 , () => {
    console.log("8081 대기중입니다")
})


