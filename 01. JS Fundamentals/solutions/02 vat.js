function calculateSumAndVAT(arr) {
    let sum = 0;

    for(let price of arr) {
        sum += Number(price);
    }
	
	let vat = sum * 0.2;
	let total = sum * 1.2;

    console.log(`SUM = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`TOTAL = ${total}`);
}

calculateSumAndVAT(['1.20', '2.60', '3.50']);