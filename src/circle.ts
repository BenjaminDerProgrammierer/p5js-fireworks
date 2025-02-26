import { p } from './index';

// Example helper function
export function drawCircle(x: number, y: number) {
    if (!p) {
        throw new Error('p5 instance not found');
    }

    p.strokeWeight(5);
    p.stroke('lime');
    p.fill(p.color(255, 255, 255, 200));
    p.circle(x, y, 75);
}
