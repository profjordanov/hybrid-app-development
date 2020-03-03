function triangleArea(arr) {
	
    arr = arr.map(Number);
	
    let sideA = arr[0];
	let sideB = arr[1];
	let sideC = arr[2];
	
    let semiperimeter = (sideA + sideB + sideC)/2;
	
    let area = Math.sqrt(semiperimeter * (semiperimeter - sideA) * (semiperimeter - sideB) * (semiperimeter - sideC));
	
    console.log(area);
}

triangleArea(['3', '4', '5']);