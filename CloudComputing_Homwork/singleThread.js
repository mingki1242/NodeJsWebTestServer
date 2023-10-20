const fs = require("fs");

fs.readFile("student_data.txt", "utf8", (err, fileContents) => {
    if (err) {
        console.error(err);
        return;
    }

    const targetId = '199992'; // 검색할 학번

    const lines = fileContents.split('\n');
    let foundStudent = null;

    const startTime = performance.now();

    for (const line of lines) {
        const [id, department, gender, name] = line.split(' ');

        if (id === targetId) {
            foundStudent = {
                학번: id,
                학과: department,
                성별: gender,
                학생이름: name,
            };
            break;
        }
    }

    const endTime = performance.now();
    const executionTime = endTime - startTime;

    if (foundStudent) {
        console.log('검색 결과:', foundStudent);
    } else {
        console.log('검색 결과: 해당 학번을 찾을 수 없습니다.');
    }

    console.log('실행 시간 (밀리초):', executionTime);
});
