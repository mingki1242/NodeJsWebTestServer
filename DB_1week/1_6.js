function solution (n)
{
    let sum = 0 ;
    for(let x = 1 ;x<=n/2;x++)
    {
        if(n%x == 0)
        {
            sum +=x;
        }

    }
    return x==sum;

}

for(let i = 1 ;i<=20000;i++)
{
    if(solution(i))
        console.log(i);

}

