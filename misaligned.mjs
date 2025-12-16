import { expect } from 'chai';

function print_color_map() {
    const lines = [];
    const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
    const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            lines.push(`${i * 5 + j } | ${majorColors[i]} | ${minorColors[j]}`);
            console.log(lines[lines.length - 1]);
        }
    }
    return {result: majorColors.length * minorColors.length, lines};
}

const { result, lines } = print_color_map();
expect(result).equals(25);


const firstLine = lines[0];
// We expect numbering to start from 1:
expect(firstLine).equals("1 | White | Blue");


console.log('All is well (maybe!)');
