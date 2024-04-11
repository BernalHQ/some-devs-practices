const side = 30
const half = 15
let row = ""
let startPaint = 15;

for (let i = 1; i <= side; i++) {
    for (let j = 1; j <= side; j++) {
        if (j === half || j === startPaint) {
            row += "*"
            startPaint = half - 1
            continue
        } else if (j > startPaint && j <= half) {
            row += "*"
            startPaint = half - 1
            continue
        }
        row += " "
    }
    console.log(row)
    row = "";
}
