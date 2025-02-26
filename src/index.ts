// Import the CSS styles for the sketch
import './style.css';
// Import the p5.js library for use in the sketch
import p5 from 'p5';

// Import helper functions from other files
import { drawCircle } from './circle';

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

    // Event handling functions
    p.keyPressed = keyPressed;      // Triggered when a key is pressed
    p.mousePressed = mousePressed;  // Triggered when a mouse button is pressed
}, document.getElementById("app")!);

// preload() is used for preloading assets before the sketch runs
function preload() {
    // This function runs once before setup() and is typically used for loading files (e.g., images, sounds)
    // https://p5js.org/reference/p5/preload/
}

function setup() {
    // setup() runs once at the beginning of the sketch, used for initial setup (e.g., canvas size)
    // It is called only once at the start of the sketch
    p.createCanvas(700, 500);  // Creates a 700x500 canvas
}

function keyPressed() {
    // keyPressed() is triggered whenever a key is pressed
    // It’s used to handle keyboard input
    // https://p5js.org/reference/p5/keyPressed
    console.log(`Key ${p.keyCode} has been pressed`);  // Log the key code when a key is pressed
}

function mousePressed() {
    // mousePressed() is triggered when a mouse button is pressed
    // It’s used to handle mouse input
    // https://p5js.org/reference/p5/mousePressed
    console.log(`Mouse was pressed at ${p.mouseX}/${p.mouseY}`);  // Log the mouse position when clicked
}

function draw() {
    // draw() is called repeatedly to update the sketch’s visuals (animations, graphics, etc.)
    // It’s continuously called while the sketch is running
    // https://p5js.org/reference/p5/draw

    //Examle circle on yellow background
    p.background('yellow');
    drawCircle(p.width / 2, p.height / 2);
}
