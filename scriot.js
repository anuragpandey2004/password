let passowrdBox = document.getElementById("input");
const length =8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbol ="!@#$%^&*()_+{}[]"
const num ="0123456789"
const allChr = upperCase+lowerCase+symbol+num;

function rendomPassword(){
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password +=lowerCase[Math.floor(Math.random() *lowerCase.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]
    password  += num[Math.floor(Math.random() * num.length)]

    while(length > password.length){
        password  += allChr[Math.floor(Math.random() * allChr.length)]


    }
    passowrdBox.value =password
}
function copyPassword(){
    const copy = passowrdBox.value
    navigator.clipboard.writeText(copy)
}