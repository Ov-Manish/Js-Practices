const InputData=document.getElementById("Input-Data");

const QR_Image=document.getElementById("QR-Image");

const QrApi="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
function generateQR(e){
    e.preventDefault();
    const userInput=InputData.value;
    QR_Image.src=QrApi+userInput;
    QR_Image.style.display="inline-block";
    // QR_Image.style.maxHeight="300px";
    InputData.value="";
}