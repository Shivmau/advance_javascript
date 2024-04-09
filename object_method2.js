



let food=["Rice","daal","Salt"];
let quantity=[2,3,1];
let price=[60,50,20]

let arr=[]
for(let i=0; i<food.length; i++ ){
    arr.push({name:food[i],quantity:quantity[i],price:price[i]})
}



let obj={
    total:function(raa){
        let sum=0
        raa.forEach(function(ele,i){
            sum+=ele.quantity*ele.price
        })
        return sum
    }
}
b=obj.total(arr)
console.log("Totol:",b)














// ****************Rough work********************************




// Seconed method 



// let arr=[];
// function data(name,quantity,price){
//      let obj={
//         name:name,
//         quantity:quantity,
//         price:price
//      }
//      arr.push(obj)
//    return arr

// }

  
// data("Rice",2,33333)
// data("meal",3,3333)
// data("pea",1,3444)


// console.log(arr)





// let arr1=["Rice", "daal", "wheat"]
// let arr2=[2,3,1]
// let arr3=[3333,4444,333]
    
// let dat=[];
// for(let i=0; i<arr1.length; i++){
//     let obj={};
//     obj.name=arr1[i]
//     obj.quantity=arr2[i]
//     obj.price=arr3[i]

//     data.push(obj)
// }


// console.log(data)


// obj={

//     data:data,
//     creatObject:function(){

//     },
//     total:function(){

//     }
// }
// console.log(obj.data)


// The object must have a method called total which calculates 
// the total values of items (multiplying quantity of each with its price)

// let total=0;
// arr.forEach(function(ele,i){
//   total+=(ele.quantity*ele.price)
 
// })

// console.log(total)
