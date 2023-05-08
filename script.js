
 const name = document.getElementById("cardName")
 const cardNumber = document.getElementById("cardnumber")
 const monthNumber = document.getElementById("monthnumber")
 const yearNumber = document.getElementById("yearnumber")
 const cvcNumber = document.getElementById("cvcnumber")
 const form = document.getElementById("form")

form.addEventListener("submit",validateform)  

function validateform(ev){
ev.preventDefault()
const cardLoginDetails = new FormData(form)
const name = cardLoginDetails.get("cardname")  


form.innerHTML = `
<div class="gratitudemsg">
    <img src="images/icon-complete.svg"> 
    <h2>THANK YOU ${name}</h2>
    <p>We've added your card details</p>
    <button> Continue </button>
</div>
`  
  
}

 const APP= {
   init(){
  APP.addListeners()
   },
addListeners(){
  // I am a little bothered about repeating similar event listeners      
  
 cardNumber.addEventListener("input",APP.testcardNumber)
 monthNumber.addEventListener("input",APP.testmonthNumber)
 yearNumber.addEventListener("input",APP.testyearNumber) 
 cvcNumber.addEventListener("input",APP.testcvcNumber) 

 // cardNumber.addEventListener("change",APP.testcardNumber)
 // monthNumber.addEventListener("change",APP.testmonthNumber)
 // yearNumber.addEventListener("change",APP.testyearNumber) 
 // cvcNumber.addEventListener("change",APP.testcvcNumber) 

cardNumber.addEventListener("invalid",APP.failedtest)
monthNumber.addEventListener("invalid",APP.failedtest)
yearNumber.addEventListener("invalid",APP.failedtest) 
cvcNumber.addEventListener("invalid",APP.failedtest) 
 },

   
testcardNumber(ev){
cardNumber.style.border ="2px solid var(--neutral-light-grayish-violet)"  
 let card = ev.target
 card.setCustomValidity('')
 let isValid = card.checkValidity()
   if(isValid) {
let fine = card.parentElement.querySelector("small")
  fine.textContent=""
 card.value == "0000000000000000" ? card.reportValidity() : card.setValidity('')   
   }    
 },
   
 testmonthNumber(ev){
monthNumber.style.border ="2px solid var(--neutral-light-grayish-violet)"
 let month = ev.target
 month.setCustomValidity('')
 let isValid = month.checkValidity()
   if(isValid) {
   month.value <= 12 && month.value >= 1 ? month.setCustomValidity('') : month.reportValidity() 
    let fine = month.parentElement.querySelector("small")
     fine.textContent=""
   }
 },  
   
 testyearNumber(ev){
  yearNumber.style.border ="2px solid var(--neutral-light-grayish-violet)"
   let year = ev.target
   console.log(year,"value")
 year.setCustomValidity('')
 let isValid = year.checkValidity()
   if(isValid) {
     let fine = year.parentElement.querySelector("small")
     fine.textContent=""
     console.log(year.value <= 28 && year.value >= 19)
     if(year.value <= 28 && year.value >= 19){
       year.setCustomValidity('')
       console.log("blue") 
     }else{
       year.reportValidity()
       console.log("red")
     }
// year.value <= 28 && year.value >= 19 ?  year.setCustomValidity('') : year.reportValidity() 
   }
 }, 
  testcvcNumber(ev){
  cvcNumber.style.border ="2px solid var(--neutral-light-grayish-violet)"
   let cvc = ev.target
 cvc.setCustomValidity('')
 let isValid = cvc.checkValidity()
   if(isValid) {
   let fine = cvc.parentElement.querySelector("small")
     fine.textContent=""
    cvc.value < 10000 && cvc.value > "000" ?  cvc.setCustomValidity('') : cvc.reportValidity() 
   }
 },
   
failedtest(ev){
let field = ev.target
  
   switch(field.id){
    case "cardnumber":
    let  span = field.parentElement.querySelector("small")
      span.textContent= field.value === "" ? "can't be blank" : "Wrong format,numbers only"
   cardNumber.style.border ="2px solid var(--primary-inputerror-color)"
      break;
      
    case "monthnumber":
       console.log(field,"number")
     let  pan = field.parentElement.querySelector("small")
      pan.textContent = (field.value === "") ? "can't be blank" : "Enter a number between 1 and 12"
   monthNumber.style.border ="2px solid var(--primary-inputerror-color)"
      break;
      
    case "yearnumber":
      let an = field.parentElement.querySelector("small")
      an.textContent = (field.value === "") ? "can't be blank": "Enter number between 19 and 29" 
  yearNumber.style.border ="2px solid var(--primary-inputerror-color)"
     break;
  
  case "cvcnumber":
   let small = field.parentElement.querySelector("small")
  small.textContent = field.value === "" ? "can't be blank" : "Enter the 3  digits behind your card"
   cvcNumber.style.border = "2px solid var(--primary-inputerror-color)"       } 
  }
 }


document.addEventListener("DOMContentLoaded",APP.init)