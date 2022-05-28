function dark(arr) {
   arr = arr.toString().split('|')
   let health = 100;
   let coins = 0;
   let room = 0;

   for (let el of arr) {

      let [first, second] = el.split(' ');

      if (first == 'potion') {
         let healedFor = Number(second);
         if (health + healedFor <= 100) {
            health += healedFor;
            console.log(`You healed for ${healedFor}hp`);
            console.log(`Current health: ${health} hp.`);
         }
         if (health + healedFor > 100) {
            health = 100;
            console.log(`You healed for ${100 - health}hp`);
            console.log(`Current health: ${health} hp.`);
         }
         room++;

      } else if (first == 'chest') {
         coins += Number(second);
         room++;
         console.log(`You found ${second} coins.`);

      } else {
         let monster = first;
         health -= Number(second);
         if (health > 0) {
            room++;
            console.log(`You slayed ${monster}.`)
         } else if (health <= 0) {
            room++;
            console.log(`You died! Killed by ${monster}.`);
            console.log(`Best room: ${room}.`)
            break;
         }
      }
   }
   console.log(`You've made it!\nCoins: ${coins}\nHealth: ${health}`)


}
dark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])