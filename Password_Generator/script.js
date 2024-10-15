const FormInfo=document.getElementById("form-area");

const PasswordRange=document.getElementById("Password-Range");

const PasswordLength=document.getElementById("Length");

const SpecialChar=document.getElementById("specialCharacter")

const Specialnumbers=document.getElementById("number");

const PasswordTEXT=document.getElementById("Password-Text")

const CopyButton=document.getElementById("copy-Button");



FormInfo.addEventListener('submit',(e)=>generatePassword(e))
PasswordRange.addEventListener('input', RangeHandler)
CopyButton.addEventListener('click',CopyPassword);

function CopyPassword(){
    navigator.clipboard.writeText(Password)
    CopyButton.innerText="Copied !"
    setTimeout(()=>{
        CopyButton.innerText="Copy"
    },2000)
}


const alphabetsL="abcdefghijklmnopqrstuvwxyz"
const alphabetsU="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers="0123456789"
const SpecialCharacters="~!@#$%^&*()_-[];'`=.,+{}:<>?/|"

let Password=""


function RandomPasssword(L) {
    let PasswordString=alphabetsL+alphabetsU;
    // console.log(L);
    if (Specialnumbers.checked) {
        PasswordString+=numbers
    }
    if (SpecialChar.checked) {
        PasswordString+=SpecialCharacters
    }
    for(let i=0;i<L;i++){
        const randomPassword=Math.floor(Math.random()*PasswordString.length)
        Password+=PasswordString[randomPassword];
        
    }
}

function RangeHandler(){
    PasswordLength.innerHTML=PasswordRange.value
}

function generatePassword(e) {
    // console.log(Specialnumbers.checked)
    e.preventDefault();
    // console.log(Password)
    Password="";
    RandomPasssword(PasswordRange.value)
    PasswordTEXT.value=Password;


}
