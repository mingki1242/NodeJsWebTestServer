//문자열 대소문자 변환
function solution (str)
{
    let answer = ""
    for(let x of str)
    {
        if(x === x.toUpperCase())
        {
            answer += x.toLowerCase()
        }
        else
        {
            answer+=x.toUpperCase()
        }

    }
    return answer;

}

console.log(solution("arPras"))