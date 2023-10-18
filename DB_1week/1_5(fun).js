//사칙연산 계산기 합 곱 나누기 빼기, 나누기는 익명함수로 만들고 빼기는 일반적인 방식 덧셈 곱셈은 화살표함수로 만들기

function calculate(x,y,f)
{
    if(typeof x == 'number' && typeof y =='number')
    {
        return f(x,y);
    }
}
const add = (x,y) => x+y;
function subtract(x,y) {
    return x-y;
}
const times = (x,y) => x*y;
const division = function (x,y) { return x/y}

console.log(calculate(10,2,add))
console.log(calculate(10,2,subtract))
console.log(calculate(10,2,times))
console.log(calculate(10,2,division))

