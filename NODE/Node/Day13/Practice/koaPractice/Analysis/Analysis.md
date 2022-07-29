// Trade off between query performance and consistency



//using refrences (Normalization) --> GIVES IS CONSISTENCY
let author = { name: "jeet" };
let course = { author: 'id' }

//using Embedded Document (Denormalization) --> GIVES IS PERFORMANCE

let course = {
    Author: {
        name: "jeet"
    }
}
//CAN'T HAVE BOTH AT THE SAME TIME

//Hybrid Approach
let author={
    name:"jeet"
    //50 other properties
}
let course={
    authod:{
        id:'ref',
        name:'jeet'
    }
}