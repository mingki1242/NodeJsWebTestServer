function shuffle(array)
{
    let answer = []
    answer = array.sort(()=>Math.random() - 0.5)
    return answer
}

console.log(shuffle([1,3,5,6,7]))