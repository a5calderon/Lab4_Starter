/**
 * 
 * @param {*} num1, first number to add. 
 * @param {*} num2, second number to add. 
 * @param {*} add, boolean value to tell the function what to do. 
 * @returns The sum of the two numbers if add is true and false otherwise.
 */
function sumValues(num1, num2, add) {
    if (add){
        if (parseInt(num1) && parseInt(num2)){
            let result = 0;
            result = num1 + num2;
            return result;
        }
        return !add;
    }else {
        return add;
    }
}
//console.log(sumValues(2,1,true));//expecting 3
//console.log(sumValues(2,1,false));//expecting false
//console.log(sumValues('word',5,true)); //expecting false
/**
 * 
 * @param {*} prices, an array of the original price.
 * @param {*} discount, a number between 0-1 to represent the discount. 
 * @returns An array of each price's new price, after the discount is applied.
 * Or false, if prices array is empty.
 */
function discountPrices(prices, discount) {
    let discounted = [];
    const length = prices.length;
    if ((!Array.isArray(prices)) || length == 0){
        return false;
    }
    let discountedPrice = 0
    for(let i = 0; i < length; i++) {
        discountedPrice = prices[i] * (1 - discount);
        discounted.push(discountedPrice);
    }

   // console.log(discounted);
    return discounted;
}
console.log(discountPrices([50, 40],0.5)); //expecting [25,20]
console.log(discountPrices([],0.1)); //expecting false
console.log(discountPrices('word',0.5)); //expecting false


module.exports = {sumValues, discountPrices};