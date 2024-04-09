

var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];


function calculateSalesTotals(arr){
  for(let i=0; i<arr.length; i++){
    if(arr[i].discount){
      arr[i].sell=(arr[i].original)-(arr[i].original*arr[i].discount/100)
      arr[i].Total=(arr[i].sell)*arr[i].stock
      
    }else{
      arr[i].sell=(arr[i].original)*(arr[i].stock);
      arr[i].Total=(arr[i].sell)
    }
    console.log(arr[i])
  }
}
calculateSalesTotals(sales)







// **************************************Rough === Work***********************************************





// function calculateSalesTotals(arr){
//    let narr=[]
//     arr.forEach(function(arr[i],i){
      
//       if(arr[i].discount==undefined){
//         narr.push({"item":arr[i].item,"Original":arr[i].original,"sale":arr[i].original,"stock":arr[i].stock,"Total":arr[i].original*arr[i].stock})
//       }else{
//         narr.push({"discount":arr[i].discount,"item":arr[i].item,"Original":arr[i].original,"sale":Number((arr[i].original)-(arr[i].original*arr[i].discount/100)),"stock":arr[i].stock,"Total":arr[i].sale})
//       }
       
//     //  console.log(arr[i].stock*arr[i].original)

//     })
//     console.log(narr)
// }



// function calculateSalesTotals(arr){
//   let narr=[]
//   for(let i=0; i<arr.length; i++)
  
//   {

    
//     if(arr[i].discount==undefined){
//       narr.push({"item":arr[i].item,"Original":arr[i].original,"sale":arr[i].original,"stock":arr[i].stock,"Total":arr[i].original*arr[i].stock})
//     }else{
//       narr.push({"discount":arr[i].discount,"item":arr[i].item,"Original":arr[i].original,"sale":Number((arr[i].original)-(arr[i].original*arr[i].discount/100)),"stock":arr[i].stock,"Total":arr[i].sale})
     
//     }
//   }console.log(narr)
// }



// console.log(array1.includes(2));