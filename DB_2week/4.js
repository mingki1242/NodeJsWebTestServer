function Sum_Arr(A)
{
    let answer= 0 ;
    for(let x = 0 ; x<=9 ; x++)
    {
        if(!A.includes(x))
            answer += x;

    }
    return answer;
}

function sum2(A)
{
    A.sort((x,y) => x-y);
    let result = 0;
    let index = 0;
    for(let x = 0 ; x<=9;x++)
    {
        if(A[index] === x) index++
        else result += x

    }
    return result
}

function sum3(A)
{
    return 45 - A.reduce((a,x) => a+x);
}
console.log(Sum_Arr([1]))
console.log(sum2([1]))