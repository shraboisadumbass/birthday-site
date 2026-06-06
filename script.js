function openScrapbook() {

    // PLAY MUSIC
    const music = document.getElementById("bg-music");

    music.play();

    // SCROLL TO LANDING
    document.querySelector(".landing")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function goNext() {

    document.querySelector(".section-two")
        .scrollIntoView({
            behavior: "smooth"
        });

    startTyping();
}

const text = `Excited? So are we

excited after 17 years of you:

being an absolute diva
borderline psychopath
and an absolute icon

proof ↓:`;

let index = 0;
let started = false;

function startTyping() {
    if (started) return;
    started = true;

    const el = document.getElementById("typing-text");
    el.innerHTML = "";
    index = 0;

    // hide proof again if revisiting
    const proof = document.getElementById("proof-container");
    if (proof) {
        proof.classList.remove("show");
    }

    type();
}

function type() {
    const el = document.getElementById("typing-text");

    if (index < text.length) {
        el.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 35);
    } else {
        showProof();
    }
}

function showProof() {
    const proof = document.getElementById("proof-container");

    if (!proof) return;

    setTimeout(() => {
        proof.classList.add("show");
    }, 400); // slight delay for drama
}