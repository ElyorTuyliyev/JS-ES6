var arr = [];
var string = "";
function HashingCode(hashSt, salt) {
  var text = hashSt;
  var textConcat = arr.concat(text);
  var textToString = textConcat.toString();
  var textSplit = textToString.split("");
  var textRevers = textSplit.reverse();
  var textString = textRevers.toString();
  Math.floor(Math.random() * 9);

  var hashingWord0 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord1 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord2 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord3 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord4 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord5 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord6 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord7 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingWord8 = textString
    .charAt(Math.floor(Math.random() * 9))
    .charCodeAt();
  var hashingCodeWords = string.concat(
    hashingWord5,
    hashingWord0,
    hashingWord6,
    hashingWord1,
    hashingWord8,
    hashingWord2,
    hashingWord7,
    hashingWord3,
    hashingWord4
  );

  if (salt == "apple") {
    console.log(hashSt);
  } else console.log(hashingCodeWords);
}
HashingCode("hello", "");
