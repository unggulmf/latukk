const texts = [
    "Selamat datang di Perusahaan Kami",
    "Kami Melayani Jasa Pembuatan Website",
    "Konsultasikan Kebutuhanmu Sekarang!!"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeText() {
    const currentText = texts[textIndex];
    let displayText;
    if(deleting) {
        displayText = currentText.substring(0, charIndex - 1);
    } else{
        displayText = currentText.substring(0, charIndex + 1);
    }

    document.getElementById("typing-text").innerHTML = displayText;

    if(!deleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeText, 100);
    } else if(deleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeText, 50)
    } else{
        deleting = !deleting;
        if(!deleting) {
            textIndex =  (textIndex + 1) % texts.length;
        }
        setTimeout(typeText, 1000)
    }
    // const displayTextt = deleting
    // ? currentText.substring(0, charIndex - 1)
    // : currentText.substring(0, charIndex + 1);
}
typeText()