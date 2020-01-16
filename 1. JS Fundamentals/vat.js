function calculateSumAndVAT(arr) {
    let sum = 0;

    for(let price of arr) {
        sum += Number(price);
    }
	
	let vat = sum * 0.2;
	
	let total = sum * 1.2;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`total = ${sum * 1.2}`);
}

calculateSumAndVAT(['1.20', '2.60', '3.50']);

calculateSumAndVAT(['3.12', '5', '18', '19.24', '1953.22', '0.20', '1.14']);