// Problem 5: Write a function to replace spaces in a given string with - .


// str="The quick brown fox jumps over the lazy dog"
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
