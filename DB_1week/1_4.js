//colatz 추측 문제 , 모든 수는 아래 알고리즘을 거듭해 나가면 1이 된다 , 1이 될때 까지 반복횟수를 출력
function solution(n)
{
    let answer = 0;
    if(n === 1) return 0;
    while(n !== 1)
    {
        if(answer === 500) return console.log(-1)
        if(n%2 === 0)
        {
            n = n / 2
            answer++;
        }
        else
        {
            n = n*3 +1
            answer++;
        }
    }

    console.log(answer);
}

solution(626331)
