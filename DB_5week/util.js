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
    });
}
module.exports = getReqData;