function insertionSort(array){

var sorted = [];

while(array.length > 0){
sorted.push(
 array.splice(
  array.indexOf(
   Math.min(...array)
  ), 1
 )
);
}

return sorted;
}
