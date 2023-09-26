//promise 생성
function foo(x , y)
{
    return new Promise((resolve , reject) => {
        setTimeout((x,y) => {
            if((x+y) %2 ==0)
                resolve(`Success : ${x+y}`)
            else
                reject(new Error(x+y));
        },1000 ,x , y)
    })
}

foo(10,20)
    .then(msg => console.log(msg))
    .catch(error => console.log(error))
foo(10,21)
.then(msg => console.log(msg))
.catch(error => console.log(error))
