//type1
function fibonacci(x) {
    if (x == 0) {
        return 0;
    }
    if (x == 1) {
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}
let n = Number(prompt('Enter your number'));
function print(text) {
    document.write(text + '<br>');
}
let fib = fibonacci(n);
print(n + 'th number in fibonacci is ' + fib);

//type 2
function fibonacci1(x) {
    var first = 0;
    var second = 1;
    var next;
    for (var i = 1; i <= x; i++) {
        next = first + second;
        first = second;
        second = next;
    }
    return first;
}
print(fibonacci1(n));

//type3
function fibonacci2(x) {
    var first = 1;
    var second = 1;
    var next;
    var arr = [];
    arr.push(first);
    arr.push(second);
    for (var i = 0; i <= n; i++) {
        next = first + second;
        first = second;
        second = next;
        arr.push(next);
    }
    return ( arr[x - 1]) ;
}
print(fibonacci2(n));
    