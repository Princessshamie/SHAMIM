function fizzbuzz(arr1= [1,2,3,4,5,6] ,arr2= [4,5,6,55,13,14,21,10,7]){
var arr3 = arr1.concat(arr2)
if((arr3.length%3)== 0){
    console.log('Fizz')
}else if((arr3.length%5)==0){
    console.log('Buzz')
}else if(((arr3.length %3) ==0) && (arr3.length% 5)==0){
    console.log('Fizzbuzz')
}else
    console.log(arr3.length)
}fizzbuzz();