const http = require('http');

// 바디 파서 함수 getReqData
function getReqData(req){
    return new Promise((resolve, reject)=>{
        try{
            let body = "";
            req.on("data", chunk => {body += chunk});
            req.on("end", () => {resolve(body)});
        }catch(err){
            reject(err);
        }
    })
}
const DB = [];
http.createServer(async (req, res) => {
    if(req.method === "GET"){
        if(req.url === '/'){
            res.writeHead(200, {"Content-Type":"application/json;charset=utf-8"});
            res.end(JSON.stringify(DB));
        }
        else {
            const id = req.url.split('/')[1];
            const record = DB.find(x => x.id === Number(id));
            res.writeHead(200, {"Content-Type":"application/json;charset=utf-8"});
            res.end(JSON.stringify(record));
        }
    }
    else if(req.method === 'POST'){
        const body = await getReqData(req);
        DB.push(JSON.parse(body));
        res.writeHead(200, {"Content-Type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(DB));
    }
    else if(req.method === 'PUT'){
        const id = req.url.split('/')[1];
        const body = await getReqData(req);
        const index = DB.findIndex(x => x.id === Number(id));
        DB[index] = JSON.parse(body);
        res.writeHead(200, {"Content-Type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(DB));
    }
    else if(req.method === 'DELETE'){
        const id = req.url.split('/')[2];
        const index = DB.findIndex(x=>x.id === Number(id));
        DB.splice(index, 1);
        res.writeHead(200, {"Content-Type":"application/json;charset=utf-8"});
        res.end(JSON.stringify(DB));
    }

})
.listen(3000, ()=>{
    console.log("3000번 포트에서 대기중...");
})