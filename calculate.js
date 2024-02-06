function calculateElectronicsBudget(items) {
    let total = 0;
    for(const item of items) {
        const cost = item.price * item.quantity;
        total = total += cost;
    }
    return total;
}

const items = [
    {name: 'leptop', price: 32000, quantity: 3},
    {name: 'phone', price: 28000, quantity: 2},
    {name: 'desktop', price: 52000, quantity: 3},
    {name: 'remote', price: 800, quantity: 5}
]

const result = calculateElectronicsBudget(items);
console.log(result);