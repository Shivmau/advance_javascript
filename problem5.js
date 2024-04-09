// Problem 5: Write a function to replace spaces in a given string with - .


// str="S hi va m ma ur ya"
function newChar(str){
    bag=""
    for(let i=0; i<str.length; i++){
        if(str[i]==" "){
        bag+="-"
        }else{
            bag+=str[i]
        }
    }return bag

}
let a=newChar("shivam maurya studies in prepeleaf by masai")

console.log(a)