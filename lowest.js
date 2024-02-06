// Task - 1:
// Find the lowest number in the array below.

const numbers = [167, 190, 120, 165, 137, 12];
function findLowestNumber(arrays) {
    let lowest = arrays[0];
    for(const array of arrays) {
        if(array <= lowest) {
            lowest = array;
        }
    }
    return lowest;
}
const result = findLowestNumber(numbers);
console.log(result)