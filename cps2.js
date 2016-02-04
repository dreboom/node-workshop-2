function getFirstChar(word, ret) {
    
    function returnFirstChar() {
        ret(word[0]);
    }
    
    setTimeout(returnFirstChar, 1000);
}


getFirstChar('javascript', function(result) {
    console.log(result);
});


function getLastChar(word, ret) {
    function returnLastChar() {
        return(word[word.length-1]);
    }
    
    setTimeout(returnLastChar, 1000);
}

getLastChar('hello', function(result) {
    console.log(result);
});

function getFirstAndLastChar(word, cb) {
    getFirstChar(word, function(firstChar) {
      getLastChar(word, function(lastChar) {  
        cb (firstChar + lastChar);
      })
})
}

getFirstAndLastChar('hello', function(result) {
    console.log('the first and last char of hello are: ' + result);
})