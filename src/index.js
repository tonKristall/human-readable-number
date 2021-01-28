module.exports = function toReadable(number) {
  let single = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight",
    "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let double = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let word = "";
  if (number < 20) {
    word = single[number];
  } else {
    let str = String(number);
    if (number < 100) {
      if (str[1] == 0) {
        word = double[str[0] - 2];
      } else {
        word = double[str[0] - 2] + " " + single[str[1]];
      }
    } else {
      let d = (str[1] + str[2]) * 1;
      if ((d < 20) && (d > 0)) {
        word = single[str[0]] + " hundred " + single[d];
      } else if (d == 0) {
        word = single[str[0]] + " hundred";
      } else if (str[2] == 0) {
        word = single[str[0]] + " hundred " + double[str[1] - 2];
      } else {
        word = single[str[0]] + " hundred " + double[str[1] - 2] + " " + single[str[2]];
      }
    }
  }
  console.log("word: " + word);
  return word;
}
