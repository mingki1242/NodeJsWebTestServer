function change (A)
{
    // return Number([...String(A)].reverse().join(''));
    return Number(String(A).split('').reverse().join(''))
}

console.log(change(12345))