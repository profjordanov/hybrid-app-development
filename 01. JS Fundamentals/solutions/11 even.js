function oddOrEven(number) {
    number = Number(number);

    if(number % 1 == 0) {
        if(number % 2 == 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("invalid");
    }
}
oddOrEven('2');
oddOrEven('5');
oddOrEven('1.22');
oddOrEven('18');