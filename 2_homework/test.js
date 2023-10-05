const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');
const crypto = require('crypto');
const fs = require('fs').promises;

function encrypt(file_name){
    return new Promise((resolve) =>{
        const worker = new Worker(__filename, {workerData:{mode:1}});
        worker.on('exit', () =>{
            console.timeEnd('encrypt_time');
            resolve();
        });
        console.time('encrypt_time');
        worker.postMessage(file_name);
    });
}
function decrypt(file_name){
    return new Promise((resolve) =>{
        const worker = new Worker(__filename, {workerData:{mode:2}});
        worker.on('exit', () => {
            console.timeEnd('decrypt_time');
            resolve();
        });
        console.time('decrypt_time');
        worker.postMessage(file_name);
    });
}
async function test_encrypt_decrypt(file_name){
    await encrypt(file_name);
    await decrypt(file_name + '.encrypted');
}

if(isMainThread){
    test_encrypt_decrypt("korea.txt");
} else {
    parentPort.on('message', async (message) => {
        const algorithm = 'aes-256-cbc';
        const key = crypto.createHash('sha256').update('@Hello World@').digest('base64').slice(0,32);
        const iv = '1234567890123456';
        const data = workerData;
        let file_data = (await fs.readFile(message)).toString();

        if(data.mode === 1){
            const cipher = crypto.createCipheriv(algorithm, key, iv);
            let result = cipher.update(file_data, 'utf8', 'base64');
            result += cipher.final('base64');
            await fs.writeFile(message + '.encrypted', result);
            parentPort.close();
        } else if(data.mode === 2){
            const decipher = crypto.createDecipheriv(algorithm, key, iv);
            let result = decipher.update(file_data, 'base64', 'utf8');
            result += decipher.final('utf8');
            await fs.writeFile(message + '.plain', result);
            parentPort.close();
        }
    });
}