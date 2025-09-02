let input =Number(prompt("Nhập số lần nhập kí tự bạn muốn"));

let number = [];

for (let i =1; i<= input;i++ ){
    let array = prompt("Nhập ký tự thứ "+i);
    number.push(array);
}

console.log(number);

let count = 0;
 for (let i = 0; i < number.length;i++){
    if (number[i] >= 0 && number[i] <= 100){
        count++;
    }
 }

 console.log("ký tự số trong mảng là " +count);
 


