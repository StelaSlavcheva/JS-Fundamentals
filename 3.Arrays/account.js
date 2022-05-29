function peterAccount(arr) {
    let account = [];
    arr.shift().toString().split(' ').map(x => account.push(x))
    

    for (el of arr) {

        let [command, game] = el.split(' ');

        if (command === 'Install' && !account.includes('game')) {
            account.push(game)

        } else if (command === 'Uninstall' && account.includes(game)) {
            let gameIndex = account.indexOf(game);

            account.splice(gameIndex, 1);

        } else if (command === 'Update' && account.includes(game)) {
            let gameIndex = account.indexOf(game);
            account.splice(gameIndex, 1);
            account.push(game);

        } else if (command === 'Expansion') {
            let [game1, expansion] = game.split('-')
            if(account.includes(game1)){
                let gameIndex = account.indexOf(game1);
            let replace = game1 + ':' + expansion
            account.splice(gameIndex+1, 0, replace)
            }
            

        } else if (command === 'Play!') {
            break;
        }

    }
    console.log(account.join(' '))
}
peterAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)