function createLoves(amount) {
  for (let i = 0; i < amount; i++) {
    const love = document.createElement("div");
    love.classList.add("love");
    love.textContent = "❤"; // bisa diganti 💖 💕 💓

    // posisi random
    love.style.left = Math.random() * window.innerWidth + "px";

    // durasi random biar jatuh beda-beda
    love.style.animationDuration = 3 + Math.random() * 5 + "s";

    // delay random biar ga jatuh barengan
    love.style.animationDelay = Math.random() * 5 + "s";

    document.body.appendChild(love);
  }
}

// bikin 20 love aja biar ringan
createLoves(20);
