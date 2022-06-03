function gladiator(inputArr) {

    let inventory = [inputArr.shift()].toString().split(' ');
  

    for (let el of inputArr) {
        let [command, equipment] = el.split(' ');

        if (command == 'Buy' && !inventory.includes(equipment)) {
            inventory.push(equipment)

        } else if (command == 'Trash' && inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment)
            inventory.splice(index, 1)
        } else if (command == 'Repair' && inventory.includes(equipment)) {
            let index = inventory.indexOf(equipment)
            let el = inventory[index];
            inventory.splice(index, 1);
            inventory.push(el);
        } else if (command == 'Upgrade') {
            [item, upgrade] = equipment.split('-');
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item)
                let el = inventory[index];
                el = el +':'+ upgrade
                inventory.splice(index+1, 0, el);
            }
        }
    }
console.log(inventory.join(' '))
}
gladiator(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)