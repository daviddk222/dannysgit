var numbers = {
    small: [1, 2, 3, 4, 5, 6, 7],
    medium: [54, 54, 54, 54, 23, 612, 712],
    large: [1214214, 2124124, 3122112, 4412441, 541221, 6124124, 7124124]
};

numbers.small.map(function (num) {
    console.log(num);
});

numbers.medium.map(function (num) {
    console.log(num);
});

numbers.large.map(function (num) {
    console.log(num);
});

var add = function (numbers) {
    var sum;
    numbers.map(function (numbers) {
        sum += numbers;
    });
    return sum;
};



console.log(add(numbers.small));



