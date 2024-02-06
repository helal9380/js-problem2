// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input

const phones = [
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 }
];

function findAveragePhonePrice(arrays) {
    let sum = 0;
    // let avg = 0;
    for(const array of arrays) {
        const phonePrice = array.price;
        sum += phonePrice;

    }
    const avg = sum / arrays.length;
    return avg;
}
const result = findAveragePhonePrice(phones)
console.log(result)