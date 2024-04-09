// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let obj={
     length:5,
     width:8,

    area: function(length, width){
         return this.length*this.width;
    },
    parameter: function(length,width){
        return 2*(this.length+this.width)
    }

}
area=obj.area()
console.log("area = "+area)

parameter=obj.parameter()
console.log("parameter = "+parameter)

