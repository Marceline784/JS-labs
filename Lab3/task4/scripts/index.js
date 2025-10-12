function str_del() {
  let selection = window.getSelection().toString();
  let str = document.getElementById("elem").textContent;
  let start = str.indexOf(selection);
  let end = start + selection.length;
  let result = str.slice(0, start) + str.slice(end);
  document.getElementById("elem").textContent = result;
}

function deleteLastChar() {
  const textEl = document.getElementById("elem");
  let s = textEl.textContent;
  if (s.length === 0) return;
  textEl.textContent = s.slice(0, -1);
}

function getProperty(obj, key) {
  return obj[key];
}

function addProperty(obj, key) {
  obj[key] = true;
  return obj[key];
}

function removeProperty(obj, key) {
  delete obj[key];
}

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function getLengthOfWord(word) {
  return word.length;
}

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;
}

function isGreaterThan(num1, num2) {
  return num1 > num2;
}

function isEven(num) {
  return num % 2 === 0;
}

function isSameLength(word1, word2) {
  return word1.length === word2.length;
}

function isEvenAndGreaterThanTen(num) {
  return num % 2 === 0 && num > 10;
}

function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}

var obj1 = { key: "value" };
console.log(getProperty(obj1, "key")); 

var myObj = {};
addProperty(myObj, "myProperty");
console.log(myObj.myProperty); 

var obj2 = { name: "Sam", age: 20 };
removeProperty(obj2, "name");
console.log(obj2.name); 
console.log(getFullName("Joe", "Smith")); 
console.log(getLengthOfWord("some")); 
console.log(getLengthOfTwoWords("some", "words")); 
console.log(isGreaterThan(11, 10)); 
console.log(isEven(11)); 
console.log(isSameLength("words", "super")); 
console.log(isEvenAndGreaterThanTen(13)); 
console.log(computeAreaOfATriangle(4, 6)); 
document.getElementById("btnDel").addEventListener("mousedown", function (event) {
  event.preventDefault(); 
  str_del();
});
