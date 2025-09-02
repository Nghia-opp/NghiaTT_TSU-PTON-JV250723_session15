let numbers =[];

for (let i = 1; i<= 10; i++) {
    let array =prompt("Nhập vào mảng các số nguyên thứ "+i);
    array[i] = Number(array[i]);
    numbers.push(array);
}
console.log(numbers);


let _number = prompt("Nhập vào số bạn cần tìm");
let check = false;
for (i = 0; i < numbers.length; i++){
    
    if (numbers[i] == _number){
        check = true;
        break;
    }
}

if(check) {
    console.log(`Number ${_number} is in the array`);
} else{
    console.log(`Number ${_number} is not in the array`);
}