// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

function prime(num){
    let count=0;
    for(let i=1; i<=num; i++){
        if(num%i==0){
            count+=1
        }
    }if(count==2){
        return true;
    }else{
        return false;
    }
}
// Non-prime number find 2 to 40 given below program
let limit=40;

for(let i=2; i<=limit; i++){
   if(prime(i)==false){
    console.log(i)
   
    } 
 
}