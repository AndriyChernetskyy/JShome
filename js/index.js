//type1
function fibonacci(x) {
    if (x <= 2) {
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
function fibonacci2(n) {
    let arr = [1, 1];
    for (let i = 2; i < n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return (arr.pop());
}
print(fibonacci2(n));
    