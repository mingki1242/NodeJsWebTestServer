// for(let i = 1 ; i<=5;i++)
// {
//     setTimeout(() => {
//         console.log(i);
//     },i*100); //100미리 세컨드 마다 console.log함수를 수행
// }

// for(let i = 1 ; i<=5 ; i++)
// {
//     setTimeout((j) => {
//         console.log(j)
//     } , i*100 , i)
// }

// function repeat_function(callback, interval)
// {
//     const tid = setInterval(callback , interval);
//     return tid;
// }
//
// function myFunction(){
//     // 실행할 callback 함수
//     console.log("Hello!!!");
// }
//
// function stop_repeat_function_after_4sec(timerId){
//     // 4초 후 멈추게하는 함수
//     setTimeout(clearInterval, 4000, timerId) // 함수가 와야 하므로 함수이름만 주고 인자는 뒤로
// }
//
// const id = repeat_function(myFunction,500)
// stop_repeat_function_after_4sec(id)

// 싱글 스레드로 소수 찾기
// const prime = require('./prime');
// console.time("single thread");
// const total = prime(2,10000000);
// console.log(`소수의 수 : ${total}`);
// console.timeEnd("single thread");

// const {Worker , workerData} = require('worker_threads');
// console.time("worker thread");
// const amount = 10000000/8;
// const threads = new Set();
//
// for(let x = 0 ; x<8;x++)
// {
//     let start = amount * x + 1;
//     let end = amount * (x + 1);
//     threads.add(new Worker("./worker.js", {workerData : {start , end}}));
// }
//
// let total_worker = 0;
// for(let worker of threads)
// {
//     worker.on('message' , number => {
//         total_worker += parseInt(number)
//     });
//     worker.on('exit',() => {
//         threads.delete(worker);
//         if(threads.size === 0)
//         {
//             console.log(`2부터 10000000까지 소수의 수 ${total_worker}`);
//             console.timeEnd("worker thread");
//         }
//     })
// }


