/*
// 희소 행렬을 나타내는 객체 생성 함수
function create_matrix(n, x) {
    const matrix = [];
    const nonZeroCount = Math.min(n * n, x); // 0이 아닌 원소의 수는 최대 n*n개
    const usedPositions = new Set(); // 이미 사용된 위치를 저장

    while (usedPositions.size < nonZeroCount) {
        const row = Math.floor(Math.random() * n);
        const col = Math.floor(Math.random() * n);
        const position = `${row}-${col}`;

        if (!usedPositions.has(position)) {
            const value = Math.floor(Math.random() * 10) + 1; // 1에서 10 사이의 랜덤 값
            matrix.push({ row, col, value });
            usedPositions.add(position);
        }
    }

    return matrix;
}

// 두 희소 행렬을 합치는 함수
function sum(arr1, arr2, n) {
    const result = [];
    const map = new Map(); // 이미 사용된 위치를 저장

    // arr1의 원소 추가
    for (const elem of arr1) {
        const key = `${elem.row}-${elem.col}`;
        map.set(key, (map.get(key) || 0) + elem.value);
    }

    // arr2의 원소 추가
    for (const elem of arr2) {
        const key = `${elem.row}-${elem.col}`;
        map.set(key, (map.get(key) || 0) + elem.value);
    }

    // 결과 행렬 생성
    map.forEach((value, key) => {
        const [row, col] = key.split("-").map(Number);
        result.push({ row, col, value });
    });

    return result;
}

// 예제 실행
const A = create_matrix(5, 4);
const B = create_matrix(5, 4);
const C = sum(A, B, 5);
console.log(A);
console.log(B);
console.log(C);
*/
function create_matrix(n,x)
{
    let matrix = []
    let before_position = []
    while(matrix.length < n)
    {
        let row = Math.floor(Math.random() * n);
        let col = Math.floor(Math.random() *n);
        let value = Math.floor(Math.random()*n);
        if(before_position[0] !== row && before_position[1] !== col)
        {
            matrix.push({row , col , value})
        }
    }



    return matrix
}

function sum(A,B)
{

}


const A = create_matrix(5, 4);
const B = create_matrix(5, 4);

console.log(A);


