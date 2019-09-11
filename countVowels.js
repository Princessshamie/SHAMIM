// var countDuplicate = 0
// countDuplicate++
// console.log(countDuplicate)
// console.log(count("The quick brown fox jumps over the lazy dog", 'the'));


function getVowels(){
    var word = 'dahdeh'
    var Vowels =word.match(/[aeiou]/gi);
    countDuplicate = 0
    console.log(countDuplicate)
    var Duplicate = []
    for(var x=0; x<word.length; x++){

        if (Duplicate.includes(word[x])){
            this.countDuplicate++
        }
        else{
            Duplicate.push(word[x])
        }
    }
    var Vowelstr =Vowels.join('')
    var arr =[]; 
    arr.push(Vowelstr)
    arr.push(countDuplicate)
    console.log(arr)
}
getVowels();