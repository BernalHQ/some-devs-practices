const side = 30
let row = ""
let startPaint = 15
let endStart = 15
let buildBaseTree = false

const clearVariables = () => {
    row = ""
    startPaint = 15
    endStart = 15
    buildBaseTree = false
}


const tree = () => {
    for (let i = 1; i <= 25; i++) {
        for (let j = 1; j <= side; j++) {
            if (j === 1 && startPaint === 0) {
                row += " "
                startPaint = 10
                endStart = 20
                buildBaseTree = true
                continue
            } else if (j === startPaint) {
                row += "*"
                if (buildBaseTree === false){
                    startPaint--
                    endStart++
                }
                continue
            } else if (j > startPaint && j <= endStart) {
                row += "*"
                continue
            } 
            row += " "
        }
        console.log(row)
        row = ""
    }
    clearVariables()
}


tree()




const rhomboid = () => {
    for (let i = 1; i <= 25; i++) {
        for (let j = 0; j <= side; j++) {
            if (j === 0 && startPaint === 0) {
                row += " "
                buildBaseTree = true
                startPaint++
                continue
            } else if (j === startPaint) {
                row += "*"
                
                if (buildBaseTree === true){
                    
                    startPaint++
                    endStart--
                } else {
                    startPaint--
                    endStart++
                }
                continue
            } else if (j > startPaint && j <= endStart) {
                row += "*"
                continue
            } 
            row += " "
        }
        console.log(row)
        row = ""
    }
    clearVariables()
}

rhomboid()