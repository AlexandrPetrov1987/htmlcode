// function sum(...arg) {
//     console.log(arg);
//     return arg.reduce((acc, value) => {
//         return acc + value;
//     });
// }
// console.log(sum(1, 2, 3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const humanReadable = (sec) => {
// //
//     const hours = parseInt(sec / 3600);
//     const min = parseInt((sec / 60) % 60);
//     const seconds = sec % 60;
//
//     const res = [ hours, min, seconds ];
//     return res.map(item => item < 10 ? `0${item}` : `${item}`).join(',');
// };
// console.log(humanReadable('4600'));

// const isTwinPrime = (num) => {
//     const isPrime = (num) => {
//         const sqrt = Math.sqrt(num);
//         for (let i = 2; i <= sqrt; i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return num > 1;
//     };
//
//     return isPrime(num) && (isPrime(num - 2) || isPrime(num + 2));
// };
// console.log(isTwinPrime(9));
const block = document.getElementById('t');
block.style.background = 'green'





