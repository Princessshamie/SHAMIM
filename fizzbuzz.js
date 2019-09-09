var array1 = [1,2,3,4,5,6] 
var array2 = [4,5,6,55]

function fizzbuzz(a, b){
    var arr3 = a.concat(b)
    if(((arr3.length%3)==0) && (arr3.length%5)==0){
        console.log('Fizzbuzz')
    }
    else 
        if((arr3.length%3)==0){
        console.log('Fizz')
        }else
            if((arr3.length% 5)==0){
                console.log('buzz')
            }else
                 console.log(arr3.length)
    }

fizzbuzz(array1, array2);