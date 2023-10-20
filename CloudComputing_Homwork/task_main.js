const fs = require("fs");
const { Worker, isMainThread, parentPort } = require("worker_threads");

if (isMainThread) {
    fs.readFile("students.txt", "utf8", (err, File_Contents) => {
        if (err) {
            console.error(err);
            return;
        }


        const lines = File_Contents.split('\n');
        const mid = Math.floor(lines.length / 2);
        const File_First_Data = lines.slice(0, mid).join('\n');
        const File_Second_Data = lines.slice(mid).join('\n');

        const File_Task1_Data = File_First_Data.slice(0,File_First_Data.length/2) + File_Second_Data.slice(0,File_Second_Data.length/2);
        const File_Task2_Data = File_First_Data.slice(File_First_Data.length/2) + File_Second_Data.slice(File_Second_Data.length/2);

        let totalResults = [];
        let isSearchCompleted = false;

        // 시간 측정
        const startTime = performance.now();

        // 워커 스레드로 파일 데이터 전달
        const worker1 = new Worker("./worker1.js", { workerData: File_Task1_Data });
        const worker2 = new Worker("./worker2.js", { workerData: File_Task2_Data });

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
