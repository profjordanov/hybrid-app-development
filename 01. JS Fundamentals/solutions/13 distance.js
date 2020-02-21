function distanceOverTime([speed1, speed2, timeInSeconds]) {
    let distance1 = (speed1 / 3.6) * timeInSeconds;
    let distance2 = (speed2 / 3.6) * timeInSeconds;

	let delta = Math.abs(distance1 - distance2);
	
    console.log(delta);
}

distanceOverTime([0, 60, 3600]); // 60000
distanceOverTime([11, 10, 120]); // 33.3333333333333
distanceOverTime([5, -5, 40]); // 111.11111111111111