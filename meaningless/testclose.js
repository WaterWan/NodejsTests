var add = function (add1) {
    var x = add1;
    return function (n) {
        return n + x;
    }
}

var res = add(10)(5);

console.log(res);