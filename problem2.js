// Problem 2: Use the above function to print the Primes from 2 to a given limit

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
//  prime number find 2 to 30 given below program
let limit=30;

for(let i=2; i<=limit; i++){
   if(prime(i)==true){
    console.log(i)
   
    } 
 
}