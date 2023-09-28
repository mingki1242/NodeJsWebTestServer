const crypto = require('crypto')
const fs = require('fs');

const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

const Key = crypto.createHash('sha256').update('@Hello World@').digest('base64').slice(0,32);
const IV = '1234567890123456'
function MainThread()
{
    function encrypt(File_Descriptor)
    {
        return new Promise((resolve , reject) => {
            const outFile = `${File_Descriptor}.encrypted`
            const thread = new Worker(__filename , {
                workerData : {How : 'encrypt' , input:File_Descriptor , output:outFile}
            });
            thread.on('message' , (msg) => {
                console.log(`암호화에 성공하였습니다!! , 소요시간 : ${msg.time}millisecond , 출력파일명 : ${File_Descriptor}.encrypted` )
                resolve();
            })
            thread.on('error' , (error)=>{
                reject(error)
            })
        })
    }
    function decrypt(File_Descriptor)
    {
        return new Promise((resolve , reject) => {
            const inputFile = `${File_Descriptor}.encrypted`;
            const outputFile = `${File_Descriptor}.plain`
            const thread = new Worker(__filename , {
                workerData : {How : 'decrypt' , input : inputFile , output: outputFile}
            })
            thread.on('message' , (msg) => {
                console.log(`복호화에 성공하였습니다!! , 소요시간 : ${msg.time}millisecond, 출력파일명 : ${File_Descriptor}.plain`)
                resolve();
            })
            thread.on('error' , (error)=>{
                reject(error)
            })
        })
    }

    async function main(){
        const FileDescriptor = 'novel.txt';
        await encrypt(FileDescriptor);
        await decrypt(FileDescriptor);
    }

    main();
}

function workerThread(){
    function encryptWorker(Initial_Filename , Final_Filename)
    {
        const fname = fs.readFileSync(Initial_Filename);
        const c = crypto.createCipheriv('aes-256-cbc' , Buffer.from(Key),Buffer.from(IV));
        const Final_Data = Buffer.concat([c.update(fname),c.final()]);
        fs.writeFileSync(Final_Filename , Final_Data);
    }

    function decryptWorker(Initial_Filename , Final_Filename)
    {

        const fname = fs.readFileSync(Initial_Filename);
        const dc = crypto.createDecipheriv('aes-256-cbc' , Buffer.from(Key),Buffer.from(IV));
        const dFinal_Data = Buffer.concat([dc.update(fname),dc.final()]);

        fs.writeFileSync(Final_Filename , dFinal_Data);

    }
    const { How , input , output} = workerData;
    const start = Date.now();
    if(How === 'encrypt')
    {
        encryptWorker(input , output);
    }
    else if(How === 'decrypt')
    {
        decryptWorker(input , output);
    }

    const end = Date.now();
    parentPort.postMessage({time : end - start});
}


if(isMainThread)
{
    MainThread();
}else
{
    workerThread();
}







