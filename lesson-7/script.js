// pow
function pow(x, n){
    return x ** n;
}
console.log(pow(10, 2))

// abs
function abs(n){
    if( n > 0 ){
        return n
    }else{
        return -(n)
    }
}
console.log(abs(-4))

// sqrt
function sqrt(n){
   
        return n**(1/2);
    
}
console.log(sqrt(16))

// floor
function floor(x){
    if(x%1>0.5){
        return x.toFixed(0)-0.1;
    
    }else
        return x.toFixed(0);
    
}
console.log(floor(5.6))

// ceil
function ceil(x){
    if(x>toFixed(0.5))
    return x.toFixed()
}
console.log(2.4)
// trunc
function trunc(x){
    return x.toFixed(0)
}
console.log(trunc(1.6))
// round
function round(x){
    return x.toFixed(0)
}
console.log(round(2.6))
