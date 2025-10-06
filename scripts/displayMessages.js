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
    commandHandler(document.getElementById('terminalInput').value);
    document.getElementById('terminalInput').value = '';
  }
})

// Command handler
const commandHandler = (input) => {
  const command = input.split(" ")[0];
  const args = input.split(" ").splice(1);

  switch (command) {
    case '?':
      addMessage('help');
      break;
    case 'cv':
      addMessage('profile:')
      addMessage(messages.resume.profile);
      break;
    default:
      addMessage(`command: "${command}" not found. enter '?' for help.`)
  }
}