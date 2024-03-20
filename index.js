function receivesAFunction(callback) {
console.log(callback());
}
receivesAFunction(function () {return "Hello Anth!"});
function returnsANamedFunction () {
    function square (n) {
        return n * n;
    }
    return square;
}
    let squared = returnsANamedFunction();
console.log(squared(4));

function returnsAnAnonymousFunction() {
    return function (c) {
        return c + 'we are done for tonight';
    };
}

console.log(returnsAnAnonymousFunction());