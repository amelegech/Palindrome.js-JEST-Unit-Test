function palindrome (str){
    let myString = str.toLowerCase().split("").reverse().join("");
    if(str.toLowerCase() === myString){
        return true
    }else{
        return false
    }
}

module.exports= palindrome