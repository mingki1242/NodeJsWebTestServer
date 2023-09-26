function foo(str)
{
    setTimeout(str => {console.log(str);} , 2000,str);
}

foo("2초후 출력")