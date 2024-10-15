const showScreen=document.getElementById('main');

const OnOff=document.getElementById('On-Off');

showScreen.addEventListener('click', HandleFlash)

function HandleFlash() {
    showScreen.classList.toggle('FlashOff');
    if (OnOff.innerText=="ON") {
        OnOff.innerText="OFF"
    }else{
        OnOff.innerText="ON"
    }
}