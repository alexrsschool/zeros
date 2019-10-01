module.exports = function zeros(expression) {
    // your solution
    /*
    Факториал:
     число нолей на конце равно числу делителей кратных 5 при условии наличия основания 2
     факториалы меньше 5! можно не брать - нолей нет
     оставшиеся факториалы! имеют двойку,
     оставшиеся двойные!! четные - тоже.
     двойные нечетные - не имеют
     */
    let arr = expression.split('*');
    let arrLight = arr.length;
    let zero = BigInt(1);
    for (let i = 0; i < arrLight; i++) {
        if (arr[i].indexOf('!!') > 0) {
            arr[i] = arr[i].replace('!!', '');
            //считаем факториал
            for (let j = +arr[i]; j > 0; j -= 2) {
                zero = zero * BigInt(j);
            }
        } else {
            arr[i] = arr[i].replace('!', '');
            //считаем факториал
            for (let j = +arr[i]; j > 0; j--) {
                zero = zero * BigInt(j);
            }
        }
    }

    let arrZero = String(zero);
    let lenghZero = arrZero.length;
    let count = 0;
    for (let i = lenghZero - 1; i > 0; i--) {
        if (arrZero[i] === '0') count++;
        else break;
    }

    return count;
}