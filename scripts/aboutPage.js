const pageTitleAscii = "                                                  \n           ▄▄                                     \n           ██                              ██     \n  ▄█████▄  ██▄███▄    ▄████▄   ██    ██  ███████  \n  ▀ ▄▄▄██  ██▀  ▀██  ██▀  ▀██  ██    ██    ██     \n ▄██▀▀▀██  ██    ██  ██    ██  ██    ██    ██     \n ██▄▄▄███  ███▄▄██▀  ▀██▄▄██▀  ██▄▄▄███    ██▄▄▄  \n  ▀▀▀▀ ▀▀  ▀▀ ▀▀▀      ▀▀▀▀     ▀▀▀▀ ▀▀     ▀▀▀▀  \n                                                  \n                                                  "

let pageTitle = document.getElementById('pageTitle');

if (window.innerHeight > 500 && window.innerWidth > 1200) {
    pageTitle.innerHTML = `<textarea readonly spellcheck="false" tabindex="-1">${pageTitleAscii}</textarea>`;
} else {
    pageTitle.innerHTML = "<h2>about</h2>";
}

const messages = [
    {date: "February 2002", text: "Born and raised in Ayrshire, Scotland."},
    {date: "August 2013", text: "Started Computing Science at Kilwinning Academy, where I first learned Python and developed an interest in programming."},
    {date: "June 2019", text: "Finished school with Advanced Highers in Mathematics and Computing Science. These subjects shaped how I approach problem solving and logic."},
    {date: "September 2019", text: "Moved to Fife to begin an integrated master's degree in Mathematics at the University of St Andrews."},
    {date: "March 2020", text: "Returned home as studies moved online due to the pandemic. Adjusting to remote learning taught me a lot about independence and focus."},
    {date: "May 2021", text: "Achieved a place on the Dean’s List for academic excellence during a challenging academic year."},
    {date: "September 2022", text: "Continued my studies with a focus on pure mathematics and its computational aspects, including numerical analysis and game theory."},
    {date: "July 2023", text: "Gained a place on Entrepreneurial Scotland's Saltire Scholarship, through which I secured a summer internship at a local tech startup, EileanTech."},
    {date: "November 2023", text: "My game theory algorithm placed first in our class Axelrod Tournament. It deepened my interest in how strategy and computation intersect."},
    {date: "June 2024", text: "Completed my master’s degree in Mathematics at St Andrews. My final project project was titled 'The Inner Tubular Volume of a Self-Similar Fractal String'."},
    {date: "November 2024", text: "Began working as an IT Operations Consultant at FDM Group, developing practical skills across systems, networks, and automation."},
    {date: "June 2025", text: "Started a placement within Lloyds Banking Group’s API and Digital Services Platform, focusing on API systems and cloud-native tools."},
    {date: "July 2025", text: "Married my partner, Esther, and moved to our new home in Stepps, North Lanarkshire."},
    {date: "2025", text: "Currently working on personal projects combining software development and AI, including a self-hosted file platform and directory analysis tool."},
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