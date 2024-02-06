// Find the friend with the smallest name.

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed', 'bo'];

function smallest(arrays) {
    let result = arrays[0];
    for(const array of arrays) {
        if(array.length < result.length) {
            result = array;
        }
    }
    return result
}
const result = smallest(heights2)
console.log(result)