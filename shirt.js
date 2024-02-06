
function shirtQuantity(shirtQuantity, pantQuantity, shoeQuantity) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 1200;

    const shirtTotalPrice = shirtPrice * shirtQuantity;
    const pantTotalPrice = pantPrice * pantQuantity;
    const shoeTotalPrice = shoePrice * shoeQuantity;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;

    return totalPrice;
}

const result = shirtQuantity(1, 1, 1);
console.log(result)