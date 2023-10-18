const http = require('http');
const fs = require('fs').promises;
const getReqData = require('./util.js');

function bodyParse(data){
    return data.split("&")
    .map(x=>x.split('='))
    .reduce((acc,[k,v])=>{
        acc[k.trim()] = decodeURIComponent(v)
        return acc;
    },{});
}
DB = [];
http.createServer(async (req, res)=>{
    if(req.method === 'GET'){
        const data = await fs.readFile('./grade.html');
        res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
        res.end(data);
    }
    else if(req.method === 'POST'){
        const data = await getReqData(req);
        const body = bodyParse(data);
        console.log(body);
        const total = Number(body.mexam) + Number(body.fexam) + Number(body.report) + Number(body.attendance)
        res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
        if(total >= 60)
            res.write("<h2>성적을 취득하였습니다~~</h2>");
        else
            res.write("<h2>총점이 60점 미만입니다</h2>");
        res.write(`학번: ${body.id}<br>`);
        res.write(`이름: ${body.name}<br>`);
        res.write(`중간: ${body.mexam}<br>`);
        res.write(`기말: ${body.fexam}<br>`);
        res.write(`과제: ${body.report}<br>`);
        res.write(`출석: ${body.attendance}<p>`);
        res.write(`총점은 ${total}점 입니다.<p>`);
        res.end('<a href=http://localhost:3000>다시 입력하기</a>');
    }
})
.listen(3000, ()=>{
    console.log("3000번 포트에서 대기중...");
})