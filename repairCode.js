function triangleOfNumbers(n) {
    for (let curNum = 1; curNum <= n; curNum++) {
        let numInRow = ''
        for (let numCount = 1; numCount <= curNum; numCount++) {
            numInRow += curNum + ' ';
        }
        console.log(numInRow);
    }
}
triangleOfNumbers(3);