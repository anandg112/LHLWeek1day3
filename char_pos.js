function charPos(str){

  var letters = new Object;
  str = str.replace(/\s/g, '');

  //str = Array.from(new Set(str));
  //console.log(str);

  for(var i = 0; i < str.length; i++){
      var index = str[i];
      if(!letters[index]) {
          letters[index] = i;
        }
        else {
          letters[index] += ', ' + i;
          //letters.push(letters[index]);
        }
  }
  return letters;
}

console.log(charPos("lighthouse in the house"));