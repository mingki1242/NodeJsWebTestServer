function add(x,y){
    return new Promise(resolve => {
        setTimeout((x,y) =>{
            console.log(`1초후 : ${x+y}`)
            resolve();
        },1000 , x,y)
    })

}
function subtract(x,y){
    return new Promise(resolve => {
        setTimeout((x,y) =>{
            resolve(`2초후 : ${x-y}`)
        },2000 , x,y)
    })

}
function times(x,y){
    return new Promise((resolve , reject) => {
        setTimeout((x,y) =>{
            resolve(`1.5초후 : ${x*y}`)
        },1500 , x,y)
    })

}

async function calculate(x,y)
{
    try{
        await add(x,y);
        const msg = await subtract(x,y);
        console.log(msg);
        console.log(await times(x,y));
    }catch (error){
        console.log("Error: " , error.message);
    }
}

calculate(10,20)