class PasswordApp{
    constructor(noLetters, noDigits, noSymbols){
        this.numberOfLetters = noLetters
        this.numberOfDigits = noDigits
        this.numberOfSymbols = noSymbols
    }
    generateRandomIndex(min, max){
        return Math.floor(Math.random() * (max - min) + min + 1)
    }
    generateLetters(){
        let noOfLetters = this.numberOfLetters
        let generatedLetters = []
        while(noOfLetters > 0){
            let index = this.generateRandomIndex(65, 122)
            if(index > 90 && index < 97){
                continue
            }else{
                generatedLetters.push(String.fromCharCode(index))
                noOfLetters--
            }
        }
        return generatedLetters.join('')
    }
    generateDigits(){
        let noOfDigits = this.numberOfDigits
        let generatedDigits = []
        while(noOfDigits > 0){
            let index = this.generateRandomIndex(48, 57)
            generatedDigits.push(String.fromCharCode(index))
            noOfDigits--
        }
        return generatedDigits.join('')
    }
    generateSymbols(){
        let noOfSymbols = this.numberOfSymbols
        let generatedSymbols = []
        while(noOfSymbols > 0){
            let index = this.generateRandomIndex(33, 152)
            if((index >= 33 && index <= 47) || (index >= 58 && index <= 64) || (index >= 91 && index <= 96) || (index >= 123 && index <= 126) || (index >=145 && index <= 152)){
                generatedSymbols.push(String.fromCharCode(index))
                noOfSymbols--
            }else{
                continue
            }
        }
        return generatedSymbols.join('')
    }
    joinPasswords(){
        const letters = this.generateLetters()
        const digits = this.generateDigits()
        const symbols = this.generateSymbols()
        return letters + digits + symbols
    }
    shufflePassword (password){
        let passArr = [...password]
        for(let i = 0; i < passArr.length; i++){
            let randIndex = Math.floor(Math.random() * passArr.length)
            let temp = '';
            let currentLetter = passArr[i]
            let randLetter = passArr[randIndex]

            temp = currentLetter
            passArr[i] = randLetter
            passArr[randIndex] = temp
        }
        return passArr.join('')
    }
}
const inputs = document.querySelectorAll('.input')
const generatedPasswordBox = document.querySelector('.generated-password-box')
const generateBtn = document.querySelector('.btn')
const passLengthBox = document.querySelector('.passLength')
// const lettersNum = inputs[0].value
// const numbersNum = inputs[1].value
// const symbolsNum = inputs[2].value

const centralCheck = () => {
    const lettersNum = inputs[0].value
    const numbersNum = inputs[1].value
    const symbolsNum = inputs[2].value
    if(lettersNum == "" && numbersNum == "" && symbolsNum == ""){
        alert('Please make sure you have filled at least one field for password')
    }else{
        let passApp = new PasswordApp(lettersNum, numbersNum, symbolsNum)
        let passwordGenerated = passApp.joinPasswords()
        let shuffledPass = passApp.shufflePassword(passwordGenerated)
        generatedPasswordBox.innerHTML = shuffledPass
    }
}
generateBtn.addEventListener('click', centralCheck)