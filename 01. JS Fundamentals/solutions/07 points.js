function distanceBetweenPoints([x1, y1, x2, y2]) {
	
	let vectOneRes = Math.pow((Number(x2) - Number(x1)), 2);
	let vectTwoRes = Math.pow((Number(y2) - Number(y1)), 2);
	
	let result = Math.sqrt(vectOneRes + vectTwoRes);
	
    console.log(result);
}

distanceBetweenPoints(['2', '4', '5', '0']);