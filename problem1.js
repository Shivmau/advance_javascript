// Problem 1: Create a function to check if a number is Prime or Not


function prime(num){
    let count=0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            count+=1
        }
    }if(count==2){
        return `${num} is Prime Number`;
    }else{
        return `${num} is not Prime Number`
    }
}

let a=prime(2)
console.log(a)