function nationalCourt(arr){
    let studentsPerHour = arr.slice(0,3).map(Number).reduce((a, b) => a + b);
    let students = Number(arr[3])
    let hours = 0 ;

    while (students > 0 ){
        hours+=1;
        students-=studentsPerHour

        if (hours % 4 === 0 ){
            hours+=1
        }
    }
       console.log(`Time needed: ${hours}h.`)
}
nationalCourt(['5','6','4','20'])