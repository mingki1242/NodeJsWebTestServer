//숫자 합친 것 중에 더 큰값을 출력
function solution(a,b)
{
    /*let answer = 0;
    let op1 = a.toString()
    let op2 = b.toString()
    let sum1 = op1+op2
    let sum2 = op2+op1
    answer = Math.max(sum1,sum2)
    return answer;*/
    return Math.max(Number(`${a}${b}`) , Number(`${b}${a}`))
}

console.log(solution(10,202))