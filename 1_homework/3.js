function create_matrix(n,x)
{
    let matrix = []
    while(matrix.length < x)
    {
        let check = false;
        let row = Math.floor(Math.random() * n);
        let col = Math.floor(Math.random() *n);
        for(const item of matrix)
        {
            if(item.row === row && item.col ===col)
            {
                check = true;
                break;
            }
        }
        if(!check)
        {
            let value = Math.floor(Math.random()*10)+1;
            matrix.push({row , col , value})
        }
    }
    matrix.sort((a, b) => (a.row - b.row) || (a.col - b.col));
    return matrix
}

function sum(A,B)
{
    let answer = []
    for(const itemA of A)
    {
        let count = 0
        for(const itemB of B)
        {
            if(itemA.row === itemB.row && itemA.col === itemB.col)
            {
                count++
                let row = itemA.row
                let col = itemA.col
                let value = itemA.value + itemB.value
                answer.push({row , col , value})
                break
            }
        }
        if(count === 0)
        {
            let row = itemA.row
            let col = itemA.col
            let value = itemA.value;
            answer.push({row , col , value})
        }

    }

    for(const itemB of B)
    {
        let count = 0;
        for(const item_answer of answer)
        {
            if(itemB.row === item_answer.row && itemB.col ===item_answer.col)
            {
                count++;
                break;
            }
        }
        if(count===0)
        {
            let row = itemB.row
            let col = itemB.col
            let value = itemB.value
            answer.push({row , col , value})
        }
    }
    answer.sort((a, b) => (a.row - b.row) || (a.col - b.col));
    return answer
}


const A = create_matrix(5, 4);
const B = create_matrix(5, 4);
const C = sum(A,B);
console.log(A);
console.log(B);
console.log(C);


