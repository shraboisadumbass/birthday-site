function openScrapbook() {

    // PLAY MUSIC (with safety for mobile autoplay restrictions)
    const music = document.getElementById("bg-music");

    if (music) {
        music.play().catch(() => {
            // ignore autoplay block errors
        });
    }

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

    // small delay so section is in view before typing starts
    setTimeout(() => {
        startTyping();
    }, 400);
}

const text = `Excited? There's reason to be,

after 17 years of you:

being an absolute diva,
borderline psychopath,
and an absolute icon,

the proof:⬇`;

let index = 0;
let started = false;

function startTyping() {
    if (started) return;
    started = true;

    const el = document.getElementById("typing-text");
    if (!el) return;

    el.innerHTML = "";
    index = 0;

    // reset proof
    const proof = document.getElementById("proof-container");
    if (proof) {
        proof.classList.remove("show");
    }

    type();
}

function type() {
    const el = document.getElementById("typing-text");
    if (!el) return;

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

    setTimeout(() => {

        const btn =
        document.getElementById("proof-next-btn");

        if (btn) {
            btn.classList.add("show");
        }

    }, 700);

}, 400);
}
function goThird() {

    document.querySelector(".section-three")
    .scrollIntoView({
        behavior: "smooth"
    });

}