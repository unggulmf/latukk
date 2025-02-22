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

const bar = document.getElementById("bar")
const menu = document.getElementById("menu")
const menuItems = document.querySelectorAll(".menu a")
const i = document.getElementById("i")


bar.addEventListener("click", function(){
    menu.classList.toggle("active")

    if(menu.classList.contains("active")){
        i.classList.remove("fa-bars")
        i.classList.add("fa-times")
    }else{
        i.classList.remove("fa-times")
        i.classList.add("fa-bars")
    }
    

})

document.addEventListener("click", function(event) {
    if (menu.classList.contains("active") && !menu.contains(event.target) && !bar.contains(event.target)) {
        menu.classList.remove("active");
        i.classList.remove("fa-times");
        i.classList.add("fa-bars");
    }
});

menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", function(){
        menu.classList.remove("active")
        i.classList.remove("fa-times")
        i.classList.add("fa-bars")
    })
})