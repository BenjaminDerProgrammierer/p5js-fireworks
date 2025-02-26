// Import the CSS styles for the sketch
import './style.css';
// Import the p5.js library for use in the sketch
import p5 from 'p5';

// Import helper class from other file
import { Firework } from './firework';

// p5.js "instance mode" is recommended when using TypeScript to avoid global variables
// In this mode, we define only the methods we need (e.g., if no keyboard input is needed, 
// the keyPressed method can be omitted).
export let p: p5;  // Variable to hold the p5.js instance
export const app = new p5((p5) => {
    p = p5;

    // p5.js lifecycle methods
    p.preload = preload;  // Used to load assets before the sketch starts
    p.setup = setup;      // Initializes the sketch (called once)
    p.draw = draw;        // Draws to the screen (called repeatedly)
}, document.getElementById("app")!);

const fireworks: Firework[] = [];
let silvesterFont: p5.Font;

// preload() is used for preloading assets before the sketch runs
function preload() {
    // This function runs once before setup() and is typically used for loading files (e.g., images, sounds)
    // https://p5js.org/reference/p5/preload/
    silvesterFont = p.loadFont('/p5js-fireworks/assets/silvester-font/Silvester.ttf');
}

async function setup() {
    // setup() runs once at the beginning of the sketch, used for initial setup (e.g., canvas size)
    // It is called only once at the start of the sketch

    p.createCanvas(p.windowWidth, p.windowHeight);
    Firework.gravity = p.createVector(0, 0.005);
    p.frameRate(60);

    for (let i = 0; i < 10; i++) {
        const Farbe = p.random(0, 360); // Farbe (0-360)
        const Größe = p.random(10, 20); // Größe der Explosion
        const Anzahl = 5; // Anzahl der Raketen
        let Hoehe: number;
        for (let j = 0; j < Anzahl; j++) {
            if (j % 2 == 0)
                Hoehe = 90;
            else
                Hoehe = 67.5;
            fireworks.push(
                new Firework(p, Farbe, (((p.width - 400) * j) / (Anzahl - 1)) + 200, Hoehe + p.random(-5, 5), Größe + p.random(-5, 5))
            );
        }
        await delay(3000);
    }
}

function draw() {
    // draw() is called repeatedly to update the sketch’s visuals (animations, graphics, etc.)
    // It’s continuously called while the sketch is running
    // https://p5js.org/reference/p5/draw

    p.push();
    p.colorMode(p.RGB);
    p.background(0, 0, 0, 25);
    p.pop();

    p.push();
    p.fill('red');
    p.textSize(60);
    p.textStyle(p.BOLD);
    p.textAlign(p.CENTER, p.CENTER);
    p.textFont(silvesterFont);
    p.strokeWeight(1);
    p.text('Frohes neues \n 2025!', p.width / 2, p.height / 4);
    p.pop();

    for (const firework of fireworks) {
        firework.draw();

        if (firework.isDone) {
            fireworks.splice(fireworks.indexOf(firework), 1);
        }
    }
}

function delay(millis: number): Promise<void> {
    return new Promise<void>((res) => setTimeout(res, millis));
}