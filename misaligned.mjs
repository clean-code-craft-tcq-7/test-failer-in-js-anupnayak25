

export function print_color_map() {
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

