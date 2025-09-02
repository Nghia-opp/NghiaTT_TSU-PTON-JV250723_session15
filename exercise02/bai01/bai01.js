let input =Number(prompt("Nhập số lần nhập kí tự bạn muốn"));

let number = [];

for (let i =1; i<= input;i++ ){
    let array = prompt("Nhập ký tự thứ "+i);
    number.push(array);
}

console.log(number);

let reverse = number.reverse();

console.log("Sau khi thực hiện đảo ngược sẽ là "+reverse.join(""));


