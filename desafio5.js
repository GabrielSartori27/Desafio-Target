const reverseString = (string) => {
    let newString = '';
    for(let i = 1; i < string.length + 1; i++) {
        newString =  newString + string[string.length - i];
    }
    console.log(newString);
}
reverseString('Software');