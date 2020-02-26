function biggestOf3Numbers([num1, num2, num3]) {
    [num1, num2, num3] = [num1, num2, num3].map(Number);
    console.log(Math.max(num1, num2, num3));
}
biggestOf3Numbers(['2', '-2', '81']);
biggestOf3Numbers(['12', '111', '222']);
biggestOf3Numbers(['0.1', '2.33', '4.11']);