let result;
function max(...arg) {
    result = arg[0];
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] > result) {
            result = arg[i];
        }
    }
    console.log(result);
    return result;
}
console.log(max(5, -2, 30, 6));
console.log(max(5, -2));
