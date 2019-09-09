function getVowels(str){
    var str = 'shamie'
    var countvowels = (str.match(/[aeiou]/gi) || []).length;
    var Vowels =str.match(/[aeiou]/gi);
    var arr =[]; arr =Vowels.concat(countvowels)
    console.log(arr)
}getVowels();