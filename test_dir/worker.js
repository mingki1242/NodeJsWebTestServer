const prime = require("./prime");
const {workerData, parentPort} = require("worker_threads");

const number = prime(workerData.start, workerData.end);
parentPort.postMessage(number);
parentPort.close();