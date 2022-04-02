// Редьюс
// function sum(...arg) {
//     console.log(arg);
//     return arg.reduce((acc, value) => {
//         return acc + value;
//     });
// }
// console.log(sum(1, 2, 3));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Время
// const humanReadable = (sec) => {
//
//     const hours = parseInt(sec / 3600);
//     const min = parseInt((sec / 60) % 60);
//     const seconds = sec % 60;
//
//     const res = [ hours, min, seconds ];
//     return res.map(item => item < 10 ? `0${item}` : `${item}`).join(':');
// };
// console.log(humanReadable('3666'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Реализуйте функцию isTwinPrime, которая возвращает true, если
// 1. number - является простым числом
// 2. number+2 или number-2 - как минимум одно из этих чисел является простым.
//     Если хоть одно условие не выполняется, возвращать false.
//
//     Например, возьмем число 7.
// 1. 7 - простое число.
// 2.  7+2  = 9, 7-2 = 5.  5 простое число
// Ответ: true
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
// console.log(isTwinPrime(3));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Напишите функцию persistence, которая принимает положительный параметр num и возвращает его мультипликативную величину,
//     то есть количество раз, которое вы должны умножить на num, пока не получите одну цифру.
//     Пример:
// 39 --> 3 (3*9 = 27,  2*7 = 14, 1*4 = 4 . 4 состоит из одной цифры, чтобы дойти до четвёрки мы сделали 3 итерации. )
// const foo = (num) => {
//     let num1 = num.toString().split('');
//     let i = 0;
//     while (num1.length>1) {
//         num1 = num1.reduce((a,b) => a*b).toString().split('');
//         i++;
//     }
//     return i;
// }
// console.log(foo(443));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Замыкание
// function q(name,age) {
//     let obj = { name: name, age: age };
//     return {
//         getName : () => obj.name,
//         setName : function (name) {
//             obj.name = name;
//         }
//
//     }
//
// }
// let ee = q('as',56);
// console.log(ee.getName());
// ee.setName('name');
// console.log(ee.getName());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Замыкание.Контекст this
// class Test {
//     firstFunction() {
//         console.log('first');
//         this.#secondFunction();
//     }
//     #secondFunction() {
//         console.log('second');
//
//     }
// }
// const test = new Test();
//
// test.firstFunction();
// test.#secondFunction();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Свойство replacer JSON
// const set = {
//     userName : "Vasya",
//     level : 'yyyu',
//     health : 90,
//     value : true
// }
// const data = JSON.parse(JSON.stringify(set, [ 'userName','level', "health", 'value'  ] ));
// console.log(data);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Date
// let date = new Date().getMinutes();
// console.log(date);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Unique
// const set = new Set(['1','2','3','1']);
// console.log([...set]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Sort
// let arr = [
//     {
//         name: 'vasya',
//         age: 22
//     },
//     {
//         name: 'caly',
//         age: 30
//     },
//     {
//         name: 'fedya',
//         age: 30
//     },
//     {
//         name: 'tedya',
//         age: 30
//     },
//     {
//         name: 'kedya',
//         age: 30
//     },
//     {
//         name: 'nedya',
//         age: 30
//     },
//     {
//         name: 'zedya',
//         age: 30
//     }
// ]
// arr.sort(function (a, b) {
//     if (a.name < b.name) {
//
//         return 1;
//     } else {
//         return -1;
//     }
// }).sort((a,b) => a.age - b.age);
// console.log(arr);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Call, Apply, Bind
// let arr = [1,'qqqq','wwwwwww',4,5];
// let user1 = {
//     foo : function (arr,a) {
//         console.log(`${this.age} my ${a} ${ arr }  name is ${this.name}`);
//     },
//     foobar : function ( a, b, c) {
//         console.log(this.name,  a, b, c);
//     }
//
// }
// let user2 = {
//     name : 'qwwwwq',
//     age : 66
// }
// user1.foo.call(user2, arr, 'qqqqqqqqqqqqqqq');
// user1.foobar.call(user2, arr, 'q', 'w', 'e');
// user1.foobar.apply(user2, arr);

//Наследование функций
// function  User(name, age) {
//     this.name = name;
//         this.age = age;
// }
// let user = new User('Vasya', 33);
// console.log(user);
//
// function User2( name, age, pass, status, field) {
//     // User.apply(this, arguments);
//     User.apply(this, [name, age]);
//     this.pass = pass;
//     this.status = status;
//     this.field = field;
// }
// let user2 = new User2('Petya', 22, 'qqq',true, 'false');
// console.log(user2);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Счётчик рекурсия
// function foo(count) {
//
//     if (count >= 20) {
//         return;
//     }
//     console.log(count);
//     foo(++count);
// }
//
// foo(15);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Значения порциями в новый массив
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11];
// let num = [];
// function foo(array) {
//     for (const number of array) {
//         num.push(array.slice(0,3));
//
//         array.splice(0,3);
//     }
//     num.push(array);
//     return num;
// }
// let foo1 = foo(arr);
// console.log(foo1);
// console.log(arr);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Бесполезный rest и callback
// let arr = [1,2,3,6,5];
// let q = [arr[arr.length-2],arr[arr.length-1]];
// console.log(...q);
//
// function foo(a,b,cb) {
//     return cb(a * b);
// }
// foo(12,3,(data) => {
//     console.log(data);
// })

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Только уникальные значения из двух массивов
// function uniq(arr1, arr2) {
//     let res = new Set(arr1);
//     new Set(arr2).forEach(item => res.has(item) ? res.delete(item) : res.add(item));
//     return [...res];
// }
//
// let result = uniq([1, 2, 3, 4, 'ee', true, false], [3, 4, 4, 5, 6, 6, 6, 6, 'ee', 'qq', false]); //[1,2,5,6]
// console.log(result);
//
// function uniq(arr1, arr2) {
//     let res = new Set(arr1);
//     for (let item of new Set(arr2)) {
//         if (res.has(item)) {
//             res.delete(item);
//         } else {
//             res.add(item);
//         }
//     }
//     return [...res];
// }
//
// let result = uniq([1, 2, 3, 4], [3, 4, 4, 5, 6, 6, 6, 6, 6, 6]); //[1,2,5,6]
// console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////



