function solve(base, increment) {
    let width = base;
    let stone = 0;
    let marble = 0;
    let lapis = 0;

    let countOfSteps = 1;

    for (let i = 1; i <= base / 2; i++) {
        countOfSteps += 1

        if (i % 5 === 0) {
            stone += (width - 2) * (width - 2) * increment
            lapis += ((width - 1) * 4 * increment)
            width = width - 2;
        } else {
            stone += (width - 2) * (width - 2) * increment
            marble += ((width - 1) * 4 * increment)
            width = width - 2;
        }

    }
    let height = countOfSteps * increment;
    console.log(
        `Stone required: ${stone}
    Marble required: ${marble}
    Lapis Lazuli required: ${lapis}
    Gold required: ${1}
    Final pyramid height: ${height}  
    `)

}
solve(23, 0.5)
