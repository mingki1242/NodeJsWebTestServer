//문자열 str을 5번 출력하는 함수 solution 작성후 출력을 해보기
function solution(str,n)
{
    let answer = ""
    answer = str.repeat(n) //str.repeat 메소드도 사용가능
    /*for(let i = 0 ; i<n ; i++)
    {
        answer+=str
    }*/
    return answer
}

console.log(solution("happy" , 5))


