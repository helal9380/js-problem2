function calculate(leptop, mobile, tablet) {
    const leptopPrice = 32000;
    const mobilePrice = 22000;
    const tabletPrice = 18000;
    const leptopTotal = leptopPrice * leptop;
    const mobileTotal = mobilePrice * mobile;
    const tabletTotal = tabletPrice * tablet;
    const total = leptopTotal + mobileTotal + tabletTotal;
    return total;

}

const result = calculate(2, 1, 2);
console.log(result)