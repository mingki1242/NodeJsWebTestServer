function shuffle(array)
{
    let answer = []
    answer = array.sort(()=>Math.random() - 0.5)
    return answer
}

console.log(shuffle([1,2,3,4,5]))