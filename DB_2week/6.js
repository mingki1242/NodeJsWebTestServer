function frequency(A)
{
    let answer = {};
    for(let x of A)
    {
        answer[x] = (x in answer) ? answer[x] + 1 : 1;
    }
    max_value = Math.max(...Object.values(answer))
    for(let [key , value] of Object.entries(answer))
    {
        if(answer[key] === max_value)
            console.log(`가장 많이 나온 문자 = ${key} , 빈도수 = ${value}`)
    }
    return answer
}

console.log(frequency("URSADSDDA"))