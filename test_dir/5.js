const http = require("http");
const fs = require("fs").promises;

// http.createServer((req , res) => {
//     res.writeHead(200 ,{ 'Content-Type': 'text/html; charset=utf-8' });
//     res.write("<h2>Heelo</h2>");
//     res.end('<p>hi</p>');
// }).listen(8081 , () => {
//     console.log("8081 포트에서 대기 중입니다")
// })

// http.createServer(async (req , res) => {
//     try{
//         const data = await fs.readFile("grade.html");
//         res.writeHead(200 ,{ 'Content-Type': 'text/html; charset=utf-8' });
//         res.end(data); // html 코드가 들어감
//     }catch (err)
//     {
//         console.error(err)
//         res.writeHead(500 , { 'Content-Type': 'text/html; charset=utf-8' });
//         res.end(err.message);
//     }
// }).listen(8081 , () => {
//     console.log("8081 대기중입니다")
// })

// http.createServer((req , res) => {
//     console.log(req.url , req.headers.cookie);
//     res.writeHead(200, { 'Set-Cookie': 'mycookie=test' }); //쿠키 정보를 writeHead에 담아준다
//     res.end('Hello Cookie');
// }).listen(8083,"8083 포트 대기중")

const parseCookies = (cookie = '') =>
    cookie
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, [k, v]) => {
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        }, {});




