function createGlitters(amount) {
  for (let i = 0; i < amount; i++) {
    const glitter = document.createElement("div");
    glitter.classList.add("glitter");

    // posisi random
    glitter.style.left = Math.random() * window.innerWidth + "px";

    // durasi random biar beda-beda
    glitter.style.animationDuration = 3 + Math.random() * 5 + "s";

    // delay random biar ga jatuh bareng
    glitter.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(glitter);
  }
}

// bikin 30 glitter aja (cukup, biar ga berat di HP)
createGlitters(30);
