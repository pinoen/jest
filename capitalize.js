function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

// console.log(capitalize('eMilio'))

module.exports = capitalize;