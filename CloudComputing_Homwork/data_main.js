const fs = require("fs");
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
    fs.readFile("student_data.txt", "utf8", (err, File_Contents) => {
        if (err) {
            console.error(err);
            return;
        }

        const lines = File_Contents.split('\n');
        const mid = Math.floor(lines.length / 2);
        const File_First_Data = lines.slice(0, mid).join('\n');
        const File_Second_Data = lines.slice(mid).join('\n');

        let totalResults = [];
        let isSearchCompleted = false;


        const startTime = performance.now();


        const worker1 = new Worker("./worker1.js", { workerData: File_First_Data });
        const worker2 = new Worker("./worker2.js", { workerData: File_Second_Data });

        worker1.on('message', (result) => {
            if (result) {
                totalResults.push(result);
                showResults();
            }
        });

        worker2.on('message', (result) => {
            if (result) {
                totalResults.push(result);
                showResults();
            }
        });

        function showResults() {
            if (!isSearchCompleted && totalResults.length === 1) {
                const endTime = performance.now();
                const executeTime = endTime - startTime;

                // 결과 출력
                console.log('검색 결과:', totalResults);

                // 실행 시간 출력
                console.log('실행 시간 (밀리초):', executeTime);
                isSearchCompleted = true;
            }
        }
    });
}

