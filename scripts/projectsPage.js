const pageTitleAscii = "                                                                                \n                                  ██                                            \n                                  ▀▀                           ██               \n ██▄███▄    ██▄████   ▄████▄    ████      ▄████▄    ▄█████▄  ███████   ▄▄█████▄ \n ██▀  ▀██   ██▀      ██▀  ▀██     ██     ██▄▄▄▄██  ██▀    ▀    ██      ██▄▄▄▄ ▀ \n ██    ██   ██       ██    ██     ██     ██▀▀▀▀▀▀  ██          ██       ▀▀▀▀██▄ \n ███▄▄██▀   ██       ▀██▄▄██▀     ██     ▀██▄▄▄▄█  ▀██▄▄▄▄█    ██▄▄▄   █▄▄▄▄▄██ \n ██ ▀▀▀     ▀▀         ▀▀▀▀       ██       ▀▀▀▀▀     ▀▀▀▀▀      ▀▀▀▀    ▀▀▀▀▀▀  \n ██                            ████▀                                            \n                                                                                \n                                                                                "

let pageTitle = document.getElementById('pageTitle');

if (window.innerHeight > 500 && window.innerWidth > 1200) {
    pageTitle.innerHTML = `<textarea readonly spellcheck="false" tabindex="-1">${pageTitleAscii}</textarea>`;
} else {
    pageTitle.innerHTML = "<h2>projects</h2>";
}