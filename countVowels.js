function getVowels(str){
    var str = 'shamie'
    var Vowels =str.match(/[aeiou]/gi);
    var countvowels = Vowels.length;
    var Vowelstr =Vowels.join('')

    var arr =[]; 
    arr.push(Vowelstr)
    arr.push(countvowels)
    console.log(arr)
}
getVowels();