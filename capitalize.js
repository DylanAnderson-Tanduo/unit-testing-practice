const capitalize = (string) => {
  if (typeof string != "string") return "Invalid Input";
  let splitString = string.split("").map((char, index) => {
    if (index == 0) {
    return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }


  })
 
  return splitString.join('')
}

export default capitalize;