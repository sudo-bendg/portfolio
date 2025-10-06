const display = document.getElementById('display')

const addMessage = text => {
  const p = document.createElement('p');
  p.textContent = text;
  display.appendChild(p);
}

addMessage(messages.welcomeMessage);

// Input handler
document.getElementById('terminalInput').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addMessage(document.getElementById('terminalInput').value);
    document.getElementById('terminalInput').value = '';
  }
})