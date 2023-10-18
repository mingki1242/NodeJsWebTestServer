function union(arr1, arr2) {
    let answer = []
    let tmp = arr1.concat(arr2)

    tmp = tmp.sort((a,b) => a-b)

    let count = 0

    for (let i = 0; i < tmp.length; i++)
    {
        if(tmp[i] !== tmp[i-1]) answer.push(tmp[i])
    }

    return answer
}

console.log(union([1,2,3] , [2,3,4,5]))





