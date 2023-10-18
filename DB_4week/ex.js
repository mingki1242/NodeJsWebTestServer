// // 0.1초마다 1부터 5까지 찍기
// for (i=1; i<= 5; i++){
//     setTimeout(()=>{
//         console.log(i);
//     }, i*100)
// }
// console.log('Printed Immediately');
// // setTimeout으로 기다리는 동안 for문이 돌아 i가 6이되어 6만 5번찍힘
// // for루프 실행 시점과 console.log의 실행 시점이 달라 생김

// for (i=1; i<= 5; i++){
//     setTimeout((j)=>{
//         console.log(j);
//     }, i*100, i) // setTimeout의 실행할 함수에 인자를 주고, 3번째 인자로 해당 인자를 줌.
// }
// console.log('Printed Immediately');
//////////////////////////////////////////////////////

// // 0.5초마다 함수 실행 및 4초후 종료 시키기
// function repeat_function(callback, interval){
//     // 콜백함수와 interval을 받아 interval마다 callback실행
//     const tid = setInterval(callback,interval);
//     return tid;
// }
// function myFunction(){
//     // 실행할 callback 함수
//     console.log("Hello!!!");
// }
// function stop_repeat_function_after_4sec(timerId){
//     // 4초 후 멈추게하는 함수
//     setTimeout(clearInterval, 4000, timerId) // 함수가 와야 하므로 함수이름만 주고 인자는 뒤로
// }
// const id = repeat_function(myFunction, 500)
// stop_repeat_function_after_4sec(id)
////////////////////////////////////////////////

// 싱글쓰레드로 소수 찾는 외부 모듈 실행
// const prime = require('./prime');
// console.time("Single thread");
// const total = prime(2,10000000);
// console.log(`2부터 10000000까지 소수의 수 = ${total}`);
// console.timeEnd("Single thread");
// // 워커 쓰레드로 소수 찾는 외부 모듈 실행
// const {Worker, workerData} = require("worker_threads");
// console.time("Worker thread");
// const amount = 10000000 / 8;
// const threads = new Set();
// for(let x = 0; x < 8; x++){
//     let start = amount * x + 1;
//     let end = amount * (x + 1);
//     threads.add(new Worker("./worker.js", {workerData: {start, end}}));
// }
// let total_worker = 0;
// for(let worker of threads){
//     worker.on('message', number => {
//         total_worker += parseInt(number)
//     });
//     worker.on('exit', ()=>{
//         threads.delete(worker);
//         if(threads.size == 0){
//             console.log(`2부터 10000000까지 소수의 수 = ${total_worker}`)
//             console.timeEnd("Worker thread");
//         }
//     })
// }
///////////////////////////////////////////////////////////////////

// 입력 파일에서 길이가 limit 이상인 단어들 중에서 가장 많이 등장하는 k개의 단어 출력하는 topK(fname, limit, k)를 작성
// 단어는 모두 소문자로 변경하여 빈도수를 계산
const fs = require("fs").promises;
async function topK(fname, limit, k){
    const file = await fs.open(fname);
    const freq = {};
    for await(let line of file.readLines()){
        const words = line.toLowerCase().split(' ');
        for(let word of words){
            if(word.length < limit)
                continue;
            freq[word] = (word in freq) ? freq[word] + 1 : 1;
        }
    }
    return Object.entries(freq).sort((x,y) => y[1] - x[1]).slice(0,k);
}
topK('tale.txt', 8, 5)
    .then(result => {console.log(result)});