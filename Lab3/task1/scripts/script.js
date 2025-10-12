var globalVar = "Глобальна змінна (var)";
let localLet = "Локальна змінна (let)";
const constantValue = "Константа (const)";

let writeDiv = document.createElement("div");
writeDiv.innerHTML = "<h2>Вивід через document.write()</h2><p>" + globalVar + "</p>";
document.body.appendChild(writeDiv);
alert("Вивід через alert(): " + localLet);
console.log("Вивід через console.log(): " + constantValue);
document.getElementById("output").innerHTML = "Вивід через innerHTML: " + globalVar + ", " + localLet + ", " + constantValue;