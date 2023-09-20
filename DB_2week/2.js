a = ["dOG" , "Cat" , "Ant" , "bug"] // 대문자 먼저 정렬
console.log((a,b) => {
    if(a.toLowerCase() < b.toLowerCase())
    {
        return -1;
    }
    else if(a.toLowerCase() > b.toLowerCase())
        return 1;
    return 0;
})
