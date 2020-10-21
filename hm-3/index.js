/*let userNumber = +process.argv[2];
if (userNumber < 0) {
    console.log(`${userNumber}-Число отрицательное`)
}
else if (userNumber == 0) {
    console.log(`${userNumber}-Ноль`)
}
else {
    console.log(`${userNumber}-Число положительное`)
}
*/

/*let userAge = process.argv[2];
if (userAge > 120 || userAge < 0) {
    console.log(`${userAge}-Возраст неверный`);
}
else {
    console.log(`${userAge}-Возраст корректный`)
}*/

/*let num = process.argv[2];
console.log(`|${num}|=`, Math.abs(num));*/

/*const hours = process.argv[2];
const min = process.argv[3];
const sec = process.argv[4];
if (hours >= 0 && hours <= 23) {
    console.log('Время указано верно')
}
else {
    console.log('Что-то не так')
}
if (min >= 0 && min <= 59) {
    console.log('Время указано верно')
}
else {
    console.log('Что-то не так')
}
if (sec >= 0 && sec <= 59) {
    console.log('Время указано верно')
}
else {
    console.log('Что-то не так')
}*/

/*let x = process.argv[2];
let y = process.argv[3];
if (x === 0 && y === 0) {
    console.log('Начало координат')
}*/

let month = +process.argv[2];
switch (month) {
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    case 3:
        console.log('Март');
        break;
    case 4:
        console.log('Апрель');
        break;
    case 5:
        console.log('Май');
        break;
    case 6:
        console.log('Июнь');
        break;
    case 7:
        console.log('Июль');
        break;
    case 8:
        console.log('Август');
        break;
    case 9:
        console.log('Сеьнтябрь');
        break;
    case 10:
        console.log('Октябрь');
        break;
    case 11:
        console.log('Ноябрь');
        break;
    case 12:
        console.log('Декабрь');
        break;
    default:
        console.log('Ошибка');
        break;
}