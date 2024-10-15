const Buttons=document.querySelectorAll('.numberButton')

const result=document.getElementById('result')

const WonSound=new Audio("Audio/correct-6033.mp3")

const LostSound =new Audio("Audio/wronganswer-37702.mp3")

Buttons.forEach(button =>button.addEventListener('click',(e)=>checkAnswers(e)))

function randomNumber() {
    return Math.floor(Math.random()*6+1);
    
}

function disableButtons(option) {
    Buttons.forEach(button=>{
        button.disabled=option
        button.classList.add('disableHoverEffect')
    })
}

function reset() {
    disableButtons(false)
    Buttons.forEach(button=>{button.classList.remove('won','lost','disableHoverEffect')})
     result.innerText="Guess The Number"
}

function CorrectAnswer(CompNumber) {
    Buttons.forEach(button=>{if (Number(button.innerText == CompNumber)) {
        button.classList.add('won');
    }
    })
   
}
function checkAnswers(e) {
    disableButtons(true)
    const CompNumber=randomNumber();
    CorrectAnswer(CompNumber)
    const userNumber=Number(e.target.innerText)
    console.log("Computer Choice",CompNumber);
    console.log("Your Choice",userNumber);
    if (CompNumber == userNumber) {
        e.target.classList.add('won')
        result.innerHTML=("You WON!")
        WonSound.play();
        
    }else{
        result.innerHTML=("You LOST!")
        e.target.classList.add('lost')
        LostSound.play();
    }
    setTimeout(()=>reset(e),1000)
    
}