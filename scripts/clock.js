const clockHeightPx = Math.min(
    document.getElementById('clockFace').clientHeight,
    document.getElementById('clockFace').clientWidth
);

const xMin = -50;
const xMax = 50;
const yMin = -50;
const yMax = 50;

const clockFace = document.getElementById('clockFace');

clockFace.style.display = 'flex';
clockFace.style.flexDirection = 'column';

clockFace.style.height = `${clockHeightPx}px`;
clockFace.style.width = `${clockHeightPx}px`;

if (clockHeightPx < 100 || clockFace.clientWidth < 100) {
    clockFace.innerHTML = '<p>Screen too small to display clock.</p>';
    throw 'Screen too small to display clock.';
}

// Create pixels
for (let y = yMin; y < yMax; y++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.display = 'flex';
    row.style.flexDirection = 'row';
    clockFace.appendChild(row);
    for (let x = xMin; x < xMax; x++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.id = `pixel-${x}-${y}`;
        const pixelwidth = clockHeightPx / (Math.abs(xMin) + Math.abs(xMax));
        const pixelheight = clockHeightPx / (Math.abs(yMin) + Math.abs(yMax));
        pixel.style.width = `${pixelwidth}px`;
        pixel.style.height = `${pixelheight}px`;
        row.appendChild(pixel);
    }
}

const centerPixel = document.getElementById(`pixel-${0}-${0}`);
centerPixel.style.backgroundColor = 'red';

const drawPixel = (x, y, colour) => {
    if (!colour) {
        colour = 'black';
    }
    const pixel = document.getElementById(`pixel-${Math.round(x)}-${Math.round(y)}`);
    if (pixel) {
        pixel.style.backgroundColor = colour;
    }
}

const drawLine = (a, b, colour) => {
    function g(t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t
        };
    }
    for (let t = 0; t <= 1; t += 0.01) {
        drawPixel(Math.round(g(t).x), Math.round(g(t).y), colour);
    }
}

const drawCircle = (center, radius, colour) => {
    for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
        const x = center.x + radius * Math.cos(angle);
        const y = center.y + radius * Math.sin(angle);
        drawPixel(Math.round(x), Math.round(y), colour);
    }
}

const getHours = () => {
    const now = new Date();
    return now.getHours() % 12;
}

const getHoursCoords = (hours) => {
    const angle = (hours / 12) * 2 * Math.PI - Math.PI / 2;
    const radius = 20;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    }
}

const getMins = () => {
    const now = new Date();
    return now.getMinutes();
}

const getMinsCoords = (mins) => {
    const angle = (mins / 60) * 2 * Math.PI - Math.PI / 2;
    const radius = 30;
    return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    }
}

const drawClock = () => {
    drawCircle({ x: 0, y: 0 }, 40, 'lightgrey');
    const hours = getHours();
    const hoursCoords = getHoursCoords(hours);
    drawLine({ x: 0, y: 0 }, hoursCoords, 'black');

    const mins = getMins();
    const minsCoords = getMinsCoords(mins);
    drawLine({ x: 0, y: 0 }, minsCoords, 'black');
}

drawClock();
clockFace.style.margin = 'auto';