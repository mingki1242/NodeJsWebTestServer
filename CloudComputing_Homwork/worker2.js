const { parentPort, workerData } = require("worker_threads");

const targetId = '166601';
const lines = workerData.split('\n');

let foundStudent = null;

for (const line of lines) {
    const [id, department, gender, name] = line.split(' ');

    if (id === targetId) {
        foundStudent = {
            id: id,
            department: department,
            gender: gender,
            name: name,
        };
        break;
    }
}

// 검색 결과가 있으면 메인 스레드로 보내고 워커 종료
if (foundStudent) {
    parentPort.postMessage(foundStudent);
    parentPort.close();
}
