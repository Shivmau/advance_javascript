// Problem 4: Write a function to check if the char is a small case or not

let letter="abcdefghijklmnopqrstuvwxyz"
let char="b"
function smallchar(char){
    let flag=false
    for(let i=0; i<letter.length; i++){
        if(letter[i]==char){
            flag=true
            break
        }
    }return flag
}

a=smallchar("d")
b=smallchar("a")
c=smallchar("B")
d=smallchar("Z")
e=smallchar("y")
console.log(a,b,c,d,e)