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
