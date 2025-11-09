const pageTitleAscii = "                                                  \n           ▄▄                                     \n           ██                              ██     \n  ▄█████▄  ██▄███▄    ▄████▄   ██    ██  ███████  \n  ▀ ▄▄▄██  ██▀  ▀██  ██▀  ▀██  ██    ██    ██     \n ▄██▀▀▀██  ██    ██  ██    ██  ██    ██    ██     \n ██▄▄▄███  ███▄▄██▀  ▀██▄▄██▀  ██▄▄▄███    ██▄▄▄  \n  ▀▀▀▀ ▀▀  ▀▀ ▀▀▀      ▀▀▀▀     ▀▀▀▀ ▀▀     ▀▀▀▀  \n                                                  \n                                                  "

let pageTitle = document.getElementById('pageTitle');

if (window.innerHeight > 500 && window.innerWidth > 1200) {
    pageTitle.innerHTML = `<textarea readonly spellcheck="false" tabindex="-1">${pageTitleAscii}</textarea>`;
} else {
    pageTitle.innerHTML = "<h2>about</h2>";
}

const messages = [
    {date: "February 2002", text: "I was born!"},
    {date: "August 2013", text: "My first classes in computer science at Kilwinning Academy. These classes introduced me to using Python."},
    {date: "June 2019", text: "My time at Kilwinning Academy came to an end, with a few Advanced Highers under my belt. These included Mathematics and Computing Science."},
    {date: "September 2019", text: "I began my studies at the University of St Andrews, pursuing an integrated master's degree in Mathematics."},
    {date: "March 2020", text: "The Coronavirus pandemic led to me leaving Fife to return. My studies continued online for the remainder of the academic year."},
    {date: "May 2021", text: "Despite the continued challenges posed by the pandemic, I achieved a place on the Dean's List for academic excellence."},
    {date: "September 2022", text: "My studies in mathematics continued, with a focus on pure mathematics. I also started to learn more about the role of computation in mathematics through modules like numerical analysis, mathematical computing, and game theory."},
    {date: "November 2023", text: "My game theory class participated in an Axelrod Tournament, in which we designed algorithms and pitted them against each other. My solution came in first place."},
];

const splitTextByMaxLineLength = (text, maxLineLength) => {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    words.forEach(word => {
        if ((currentLine + word).length <= maxLineLength) {
            currentLine += (currentLine ? ' ' : '') + word;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    });

    if (currentLine) {
        lines.push(currentLine);
    }

    return lines;
}

document.addEventListener('DOMContentLoaded', () => {
    const pageContent = document.querySelector('.pageContent.aboutPage');
    if (!pageContent) return;

    const containerHeight = pageContent.clientHeight || pageContent.getBoundingClientRect().height || 0;

    messages.forEach(message => {
        const div = document.createElement('div');
        div.style.marginRight = '100px';
        div.appendChild(document.createElement('h3')).textContent = message.date;
        const lines = splitTextByMaxLineLength(message.text, 50);
        lines.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            div.appendChild(p);
        });

        pageContent.appendChild(div);

        const childHeight = div.getBoundingClientRect().height || 0;
        const maxTop = Math.max(0, Math.floor(containerHeight - childHeight));
        const top = maxTop > 0 ? Math.floor(Math.random() * (maxTop + 1)) : 0;
        div.style.marginTop = top + 'px';
        div.style.marginRight = `${Math.floor(Math.random() * 150) + 50}px`;
        div.style.border = '2px solid #444';
        div.style.padding = '10px';
    });
});