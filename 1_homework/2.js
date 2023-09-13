function union(arr1, arr2) {
    let answer = [];
    let tmp = arr1.concat(arr2);

    tmp = tmp.sort((a,b) => a-b);

    let count = 0;

    for (let i = 0; i < tmp.length; i++)
    {
        if(tmp[i] !== tmp[i-1]) answer.push(tmp[i])
    }

    return answer;
}

console.log(union([1, 2,99,2,2,4,1,5,3,6,23,7,3,2,3,1,5,23,6,34], [5, 5, 3,4,2,3,5,6,7,7,7,7,3,6,23,4,2,1]));
