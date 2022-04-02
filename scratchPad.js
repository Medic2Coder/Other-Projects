//given an array give new array with all the elements in reverse order
let numberArray = ["1,2,3,4,5,6,7,8,9,10"];
let newArray = numberArray.map(function(item){
    return item.split(",").reverse().join(",");
});
console.log(newArray);




