let numbers = [];

for (let i = 1; i<= 10; i++){
    let array =Number(prompt("NHập mảng số nguyên "+i));
    numbers.push(array);
};

console.log(numbers);
numbers.sort(function(a,b){return b-a});
console.log(numbers);


// let numbers =[2,6,3,7,3];

// numbers.sort();
// console.log(numbers);
