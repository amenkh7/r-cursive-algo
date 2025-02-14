function isLeapYear(year, divisor = 400) {
    if (divisor === 4 && year % 4 === 0 && year % 100 !== 0) return true;
    if (divisor === 100) return isLeapYear(year, 4);
    if (divisor === 400) return year % 400 === 0 || isLeapYear(year, 100);
    return false;
}

function ticketPrice() {
    const age = parseInt(prompt("Enter your age: "), 10);
    function price(age) {
        if (age <= 12) return 10;
        if (age <= 17) return 15;
        if (age >= 18) return 20;
        return price(age);
    }
    return price(age);
}

function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("is it leep year ??", isLeapYear(2024));
console.log("your ticket price is :", ticketPrice());
console.log("Fibonacci :", fibonacci(5));
