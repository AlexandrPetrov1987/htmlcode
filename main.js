// function sum(...theArgs) {
//     console.log(theArgs);
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     });
// }
//
// console.log(sum(1, 2, 3));
//
//
// console.log(sum(1, 2, 3, 4));



const humanReadable = (sec) => {
    const round = (x) => (x < 10 ? `0${x}` : `${x}`);

    const hours = parseInt(sec / (60 * 60));
    const min = parseInt((sec / 60) % 60);
    const seconds = sec % 60;

    return [hours, min, seconds].map(round).join(':');
};

console.log(humanReadable(359999)); // 99:59:59

console.log(humanReadable(0)); // 00:00:00

console.log(humanReadable(3661)); // 01:01:01