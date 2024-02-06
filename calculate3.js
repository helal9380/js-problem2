function leptop(quantity) {  // leptop price and return the total
    const leptopPrice = 56000;
    const total = leptopPrice * quantity;
    return `leptop price ${total} of ${quantity} `;
}

function mobile(quantity) {  // mobile price and return the total
    const mobilePrice = 23000;
    const total = mobilePrice * quantity;
    return `mobile price ${total} of ${quantity} `;
}
function tablet(quantity) {  // tablet  price and return the total
    const tabletPrice = 17500;
    const total = tabletPrice * quantity;
    return `tablet price ${total} of ${quantity} `;
}

function calculateElectronicsBudget(quantity, oparetion) { //quantity of the products
    if(oparetion === 'leptop') {
        return leptop(quantity);
    }
    else if(oparetion === 'mobile') {
        return mobile(quantity);
    }
    else if(oparetion === 'tablet') {
        return tablet(quantity);
    }
}
const result = calculateElectronicsBudget(5, 'mobile');
console.log(result); // output of total price of the products