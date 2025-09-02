let numbersA = [];

for (let i = 1; i<= 10; i++){
    let arrayA =Number(prompt("NHập mảng số nguyên a "+i));
    numbersA.push(arrayA);
};

console.log(numbersA);

let numbersB = [];

for(let i = 1; i <=10; i++ ){
    let arrayB =Number(prompt("Nhập mảng số nguyên b "+i));
    numbersB.push(arrayB);
} 
console.log(numbersB);

let numbersC =[numbersA.concat(numbersB)];

console.log(numbersC);



