function stringOfNumbers1ToN(lastNum) {
	
    let result = '';
	
    for(let i = 1; i<= lastNum; i++) {
        result += i;
    }

    console.log(result);
}

stringOfNumbers1ToN(10);
stringOfNumbers1ToN(20);