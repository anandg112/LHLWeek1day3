function countLetters(str){

  var letters = new Object;
  str = str.replace(/\s/g, '');

  //str = Array.from(new Set(str));
  //console.log(str);

  for(var i = 0; i < str.length; i++){
      var index = str[i];
      if(!letters[index]) {
          letters[index] = 1;
        }
        else {
          letters[index] += 1;
        }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));