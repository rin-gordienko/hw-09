// 1. Создайте объект Date для даты своего рождения
// (например 20 февраля 1995 года). Используя методы даты
// (getMonth, getFullYear и тд)
// сформировать строку следующего вида - “20.02.1995”.

const birthdayDate = new Date(1997, 1, 14);
const year = birthdayDate.getFullYear();
const month = "0" + (birthdayDate.getMonth() + 1);
const day = birthdayDate.getDate();
console.log(`${day}.${month}.${year}`);

const birthdayDate = new Date("February 14, 1997");
console.log(
  `${birthdayDate.getDate()}.${
    "0" + (birthdayDate.getMonth() + 1)
  }.${birthdayDate.getFullYear()}`
);

// 2. Напишите функции getDiffDays ,
// которая будет принимать 2 даты (дата начала и дата окончания)
// и возвращать кол-во дней которое прошло между этими датами.

function getDiffDays(start, end) {
  let startDate = new Date(start);
  let endDate = new Date(end);
  const MILLISECONDS_IN_A_DAY = 86400 * 1000;
  if (isNaN(startDate) || isNaN(endDate)) {
    return console.error("Invalid date");
  } else if (endDate < startDate) {
    return console.error("The end date can't be earlier than the start date");
  } else {
    let daysInBetween = (endDate - startDate) / MILLISECONDS_IN_A_DAY;
    return daysInBetween;
  }
}

console.log(getDiffDays("2020-01-01", "2020-01-17")); // 16
console.log(getDiffDays("2020-01-01", "2020-03-15")); // 74
console.log(getDiffDays("2222222222", "2020-03-15")); // Error: invalid date
console.log(getDiffDays("2021-01-02", "2020-03-15")); // Error: your start date is later than end

// 3. Создать функцию isWeekend которая будет проверять - выходной ли день
// (суббота или воскресенье) в переданной дате и возвращать булевый результат. Пример вызова

function isWeekend(date) {
  let userDate = new Date(date);
  if (userDate.getDay() === 0 || userDate.getDay() === 6) {
    return true;
  }
  return false;
}

console.log(isWeekend("2022-02-12")); // true
console.log(isWeekend("2022-02-13")); // true
console.log(isWeekend("2022-02-09")); // false