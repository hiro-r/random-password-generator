const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")
let passwordLength = document.getElementById("password-length")
let passwordMaxLength = 20

function exceededMax() {
    if(passwordLength.value > passwordMaxLength) {
        alert("Please enter number between 1 - " + passwordMaxLength)
    }
}

function generatePassword() {    
    let passwords = ""
    let randomNum = ""
      
    if(!passwordLength.value) {
        for (let i = 0; i < 15; i++) {
            randomNum = Math.floor(Math.random() * characters.length)
            passwords += characters[randomNum]
        }
    } else if (passwordLength.value > 0 && passwordLength.value <= passwordMaxLength) {
        for (let i = 0; i < passwordLength.value; i++) {
            randomNum = Math.floor(Math.random() * characters.length)
            passwords += characters[randomNum]
        }
    } else if (passwordLength.value <= 0 || passwordLength.value > passwordMaxLength) {
        return
    }
    return passwords
}

function createPassword() {
    let passOne = generatePassword()
    passwordOneEl.textContent = passOne
    
    let passTwo = generatePassword()
    passwordTwoEl.textContent = passTwo
}