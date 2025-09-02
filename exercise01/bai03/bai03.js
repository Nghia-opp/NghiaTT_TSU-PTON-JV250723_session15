let input = prompt("Nhập số lần bạn muốn viết kí tự");
let number = [];

for (let i = 1; i <= input; i++) {
    let array = Number(+prompt("nhập vào một mảng số nguyên " + i));
    number.push(array);
};
console.log(number);


let max = number[0];
for (let i = 0; i < number.length; i++){
    
    if (number[i] > max){
        max = number[i];
    }
};


let sum = 0;
for (let i = 1; i < number.length; i++){
    sum += number[i]; 
}
console.log("tổng giá trị của mảng là "+sum);

let averageNumber = sum / number.length;

console.log("giá trị lớn nhất trong mảng là " +max);
console.log("giá trị trung bình của các phần tử trong mảng bằng " +averageNumber);



