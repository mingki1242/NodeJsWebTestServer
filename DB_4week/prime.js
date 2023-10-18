function is_prime(n){
    if (n === 2){
        return true;
    }
    if (n <= 1 || n % 2 == 0){
        return false;
    }
    for ( let x = 3; x <= Math.sqrt(n) + 1; x += 2){
        if(n % x === 0){
            return false;
        }
    }
    return true;
}
function prime(start, end){
    let count = 0;
    for(let n = start; n <= end; n++){
        if(is_prime(n))
            count++;
    }
    return count;
}
module.exports = prime;