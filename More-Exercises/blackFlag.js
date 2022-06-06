function blackFlag(input) {
    let days = Number(input.shift());
    let dailyPlunder = Number(input.shift());
    let targetPlunder = Number(input.shift());
    let totalPlunder = 0;
  
    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) totalPlunder += (dailyPlunder * 0.50);
        if (i % 5 === 0) totalPlunder *= 0.70;    
    }
    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let percentage = ((totalPlunder * 100) / targetPlunder);
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
  }
blackFlag(['5', '40', '100']);
blackFlag(['10', '20', '380']);
