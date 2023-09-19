// 배열 원소의 인덱스 탐색 indexOf
function findAll(A , x)
{
    let answer = []
    let start = 0;
    /*for(let i of A)
    {
        i = A.indexOf('x')
        answer.push(i)
    }*/
    while(true)
    {
        let pos = A.indexOf(x,start)
        if(pos === -1) return answer;
        answer.push(pos);
        start = pos+1
    }
    return answer;
}

console.log(findAll([0,1,2,3,4,5,0,0,0,0,0],0))