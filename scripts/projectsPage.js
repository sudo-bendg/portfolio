const pageTitleAscii = "                                                                                \n                                  ██                                            \n                                  ▀▀                           ██               \n ██▄███▄    ██▄████   ▄████▄    ████      ▄████▄    ▄█████▄  ███████   ▄▄█████▄ \n ██▀  ▀██   ██▀      ██▀  ▀██     ██     ██▄▄▄▄██  ██▀    ▀    ██      ██▄▄▄▄ ▀ \n ██    ██   ██       ██    ██     ██     ██▀▀▀▀▀▀  ██          ██       ▀▀▀▀██▄ \n ███▄▄██▀   ██       ▀██▄▄██▀     ██     ▀██▄▄▄▄█  ▀██▄▄▄▄█    ██▄▄▄   █▄▄▄▄▄██ \n ██ ▀▀▀     ▀▀         ▀▀▀▀       ██       ▀▀▀▀▀     ▀▀▀▀▀      ▀▀▀▀    ▀▀▀▀▀▀  \n ██                            ████▀                                            \n                                                                                \n                                                                                "

let pageTitle = document.getElementById('pageTitle');

if (window.innerHeight > 500 && window.innerWidth > 1200) {
    pageTitle.innerHTML = `<textarea readonly spellcheck="false" tabindex="-1">${pageTitleAscii}</textarea>`;
} else {
    pageTitle.innerHTML = "<h2>projects</h2>";
}

const projects = [
    {name: "jotter", link:"https://github.com/sudo-bendg/jotter", description: [
        "A CLI task management tool built built using Python and sqlite3.",
        "This project was created to help me keep track of ideas and plans I have for various personal projects. Projects and tasks are organised in a simple hierarchy, allowing for easy management of multiple projects at once without heavy overhead."
    ]},
    {name: "digitalPhotoFrame", link: "https://github.com/sudo-bendg/digitalPhotoFrame", description: [
        "A digital photo frame built using a Raspberry Pi, displaying photos on a small connected display.",
        "This project was purely for personal use and is not my finest work. This was my first experience with a self-guided full stack project and made use of React and Express to create a simple web interface to manage photos to be displayed."
    ]},
    {name: "hearth", link: "https://github.com/sudo-bendg/hearthCore", description: [
        "A homelab API ecosystem built to facilitate self-hosted services.",
        "The '<a href='https://github.com/sudo-bendg/hearthCore'>hearthCore</a>' repo contains the core requirements for hosting services. This includes a docker compose file to manage containers, an nginx reverse proxy configuration for routing traffic, a MongoDB container for flexible data storage, and a time service to provide an example of adding custom services.",
    ]},
    {name: "task629", link: "https://github.com/sudo-bendg/task629", description: [
        "A task management pipeline to identify skills used in completing tasks.",
        "This project makes use of the '<a href='https://github.com/sudo-bendg/hearthCore'>hearth</a> homelab ecosystem to host an Ollama LLM instance, which is used to process tasks submitted via a simple web interface. The LLM analyses the task description and identifies relevant skills, which are then stored in a MongoDB database for future reference.",
        "The basic functionality of this service has been implemented, so tasks can be submitted and processed, and skills can be viewed. Next steps will be to implement a more put together UI and slightly more interesting data insights."
    ]}
]

const projectsContainer = document.getElementById('projectsTable');

projects.forEach(project => {
    let projectRow = document.createElement('tr');
    projectRow.innerHTML = `
    <td><a href="${project.link}">${project.name}</a></td>
    <td>
        ${project.description.map(paragraph => `<p>${paragraph}</p>`).join('<br>')}
    </td>
    `
    projectsContainer.appendChild(projectRow);
});