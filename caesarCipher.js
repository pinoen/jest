function caesarCipher(string, factor) {
  let result = [];
  for (letter of string) {
    if (/\w/.test(letter)) {
      if ((letter.charCodeAt(letter) + factor) <= 90) {
        result.push(letter.charCodeAt(letter) + factor)
      } else {
        result.push(letter.charCodeAt(letter) + factor - 26)
      }
    } else {
      result.push(letter.charCodeAt(letter))
    }
  }
  return decipher(result)
}

function decipher(arr) {
  let cipher = ''
  for (item of arr) {
    cipher += String.fromCharCode(item)
  }
  return cipher
}

// console.log(caesarCipher('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.', 13))

module.exports = caesarCipher