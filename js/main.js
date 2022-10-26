

const userName = prompt("nome");
const userSurname = prompt("cognome");
const userColor = prompt("colore preferito");


const userCompleteName = `${userName} ${userSurname}`;
const userPassword = `${userName}${userSurname}${userColor}21`;

console.log("valore di userName:", userName);
console.log("valore di userSurname:", userSurname);
console.log("valore di userCompleteName:", userCompleteName);
console.log("valore di userColor:", userColor);
console.log("valore di userPassword", userPassword);


document.getElementById("pass-generator").innerHTML =`<div class="text-uppercase">congratulazioni ${userCompleteName}!!! </div>
la tua nuova username è: ${userName}${userSurname}${userColor}21`;
