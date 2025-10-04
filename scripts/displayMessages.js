const display = document.getElementById('display')

const addMessage = text => {
  const p = document.createElement('p');
  p.textContent = text;
  display.appendChild(p);
}

addMessage(messages.welcomeMessage)