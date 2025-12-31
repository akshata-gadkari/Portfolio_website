
const text = document.querySelector(".typing-text");
const words = ["Web Developer", "Full Stack Developer", "Software Developer"];
let i = 0;

setInterval(() => {
    text.textContent = words[i];
    i = (i + 1) % words.length;
}, 2000);