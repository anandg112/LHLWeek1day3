function countLetters(str){

  var letters = new Object;
  str = str.replace(/\s/g, '');

  for(i = 0; i < str.length; i++){
   var letter = str.charAt(i);
   letters[letter] = (isNaN(letters[letter]) ? 1 : letters[letter] + 1);
  }

  for(key in letters){
    console.log(key + ': ' + letters[key])
  }
}

countLetters("lighthouse in the house");