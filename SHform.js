const names=document.getElementById('name')
const email=document.getElementById('email')
const phoneNumber=document.getElementById('phoneNumber')
const gender=document.getElementById('gender')
const password=document.getElementById('password')

const submit=document.getElementsByTagName('button')[0]
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    inputCheck()
    
} )

function inputCheck(){
const namesValue=names.value.trim() 
  
const emailValue=email.value.trim()   
const phoneNumberValue=phoneNumber.value.trim()    
const genderValue=gender.value.trim() 
   
const passwordValue=password.value.trim()    

// regex test for name
let nError=document.getElementsByClassName('nameError')[0]
let nameRegex=/[A-Za-z]/
let validName=nameRegex.test(namesValue)

if(validName){
nError.style.display='none'
}else{
    nError.style.display='block'
}

// regex to test email
let EError=document.getElementsByClassName('EmailError')[0]
let emailRegex=/[A-Za-z]/
let validEmail=emailRegex.test(emailValue)

if (validEmail){
    
    EError.style.display='none'
}else{
    EError.style.display='block'
}

//regex to test phonenumber
let pError=document.getElementsByClassName('phoneError')[0]
let phoneRegex=/[0-9]/
let validPhone=phoneRegex.test(phoneNumberValue)
if (validPhone){
pError.style.display='none'
}else{
    pError.style.display='block'
}

// regex to test gender
let gError=document.getElementsByClassName('genderError')[0]
let correctGender=(genderValue=='Male' || genderValue=='Female')
if (correctGender){
    gError.style.display='none'
}else{
    gError.style.display='block'
}

let passError=document.getElementsByClassName('passwordError')[0]
let passRegex=/[A-Za-z]/
let validPass=passRegex.test(passwordValue)
if (validPass){
    passError.style.display='none'

}else{

    passError.style.display='block'
}


//Submission success message
let submission=document.getElementsByClassName('Submission')[0]
if(validName && validEmail && validPhone && validPass && correctGender){
    submission.style.display='block'
}else{
    submission.style.display='none'
}

}

