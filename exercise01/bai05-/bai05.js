let input =prompt("Nhập số lần nhập ký tự bạn muốn nhập");
let numbers = [];

for (let i = 1; i <=input; i++){
    let array = prompt("ký tự thứ "+i);
    numbers.push(array);
}
console.log(numbers);

let index = 0;
for (let i = 0; i <= numbers.length;i++){
    if(numbers){
        index++;
    }
}

console.log(`Số kí tự trong chuỗi là ${index}`);


