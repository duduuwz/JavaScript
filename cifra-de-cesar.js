function rot13(str) {
  var decodedStr = '';

  for (var i = 0; i < str.length; i++) {
    var char = str[i];

    if (char.match(/[A-Z]/)) {
      var charCode = str.charCodeAt(i);
      var decodedCharCode = ((charCode - 65 + 13) % 26) + 65;
      var decodedChar = String.fromCharCode(decodedCharCode);
      decodedStr += decodedChar;
    } else {
      decodedStr += char;
    }
  }

  return decodedStr;
}

// Testes
console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."