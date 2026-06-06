function openScrapbook() {

    // PLAY MUSIC
    const music = document.getElementById("bg-music");

    music.play();

    // SCROLL
    document.querySelector(".landing")
    .scrollIntoView({
        behavior: "smooth"
    });

}
