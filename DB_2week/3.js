function first(A , n = 1)
{
    let answer =  [];
    answer = A.slice(0, n)
    return answer
}

function last(A , n=1)
{
    if(n > A.length) n = A.length
    let answer = []
    answer = A.slice(A.length-n , A.length)
    return answer
}

console.log(first([7,9,0,-1]));
console.log(last([7,9,0,-1]));