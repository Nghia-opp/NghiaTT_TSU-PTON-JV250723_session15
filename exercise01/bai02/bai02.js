let numbers = [];

for (let i =1;i <= 10;i++){
    let array  = Number(prompt("Nhập các số nguyên dương tùy chọn thứ "+i));
    numbers.push(array);
};

console.log(numbers);

let max = numbers[0];
for (let i = 1; i < numbers.length; i++ ){
    if (numbers[i] > max) {
        max = numbers[i];
    }
};

console.log("phần tử có giá trị lớn nhất trong mảng là " + max +" và nằm ở vị trí " + numbers.indexOf(max));
