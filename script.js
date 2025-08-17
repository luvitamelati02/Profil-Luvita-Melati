function createGlitter() {
  const glitter = document.createElement("div");
  glitter.classList.add("glitter");
  glitter.style.left = Math.random() * window.innerWidth + "px";
  glitter.style.animationDuration = 3 + Math.random() * 5 + "s";
  document.body.appendChild(glitter);

  setTimeout(() => {
    glitter.remove();
  }, 8000);
}

setInterval(createGlitter, 200);
