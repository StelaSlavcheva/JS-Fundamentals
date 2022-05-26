function solve(base, increment) {
    let width = base;
    let stone = 0;
    let marble = 0;
    let lapis = 0;

    let countOfSteps = 1;

    for (let i = 1; i <= base / 2; i++) {
        countOfSteps += 1
        stone += (width - 2) * (width - 2) * increment;
        width = width - 2;

        if (i % 5 === 0) {
            lapis += ((width - 1) * 4 * increment)
        } else {
            marble += ((width - 1) * 4 * increment)
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
