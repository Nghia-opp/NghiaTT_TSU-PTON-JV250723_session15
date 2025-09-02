let numbers = [];

let count = 0;
for ( let i = 1; i <= 10; i++){
    let index = prompt("Nhập vào số nguyên dương ",i);
    index[i] = Number(index[i]);
    numbers.push(index);
};

for (let i =0; i < numbers.length; i++) {
    if (numbers[i] >= 10){
        count++;
    }
}
console.log(numbers);

console.log(`có khoản ${count}  số lớn hơn hoặc bằng 10 `);

// let number = [];

// let index = prompt("Nhập vào số nguyên dương");

// for (let i = 1; i <= 10; i++){
//     number.push(index = i);
// }

// console.log(number);

 