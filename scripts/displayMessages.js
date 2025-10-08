const display = document.getElementById('display')

const addMessage = (text, className = '') => {
  const p = document.createElement('p');
  p.textContent = text;
  if (className) p.className = className;
  display.appendChild(p);
  return p;
}

const addPromptMessage = (text) => {
  const p = document.createElement('p');
  p.innerHTML = `<span class="prompt">ben@portfolio:~$</span> ${text}`;
  display.appendChild(p);
  return p;
}

const animateDots = (element) => {
  let dots = '';
  const interval = setInterval(() => {
    dots += '.';
    element.textContent = dots;
    if (dots.length >= 3) {
      dots = '';
    }
  }, 300);
  return interval;
}

setTimeout(() => addMessage("terminal v1.0.0 initialized", "info"), 300);
setTimeout(() => addMessage("connecting to system..."), 750);
setTimeout(() => addMessage("authentication successful", "success"), 1400);
setTimeout(() => addMessage("loading user profile..."), 1900);
setTimeout(() => {
  const dotsElement = addMessage("", "info");
  const interval = animateDots(dotsElement);
  setTimeout(() => {
    clearInterval(interval);
    dotsElement.textContent = "...";
  }, 1200);
}, 2300);
setTimeout(() => addPromptMessage("./ben.sh"), 3800);
setTimeout(() => addMessage("executing script...", "info"), 4100);
setTimeout(() => addMessage("profile loaded successfully", "success"), 5200);
setTimeout(() => addMessage("welcome", "success"), 5800);
setTimeout(() => {
  window.location.href = './pages/home.html';
}, 6500);