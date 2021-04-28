/*Разбор задачи на поиск трёхзначного числа*/

/*Создаём переменную для работы с набором чисел*/
let string = prompt('Введите набор цифр');

let array = string.split(',');

/*Пока эта переменная равна нулю - нам ещё не попалось трёхзначное*/
let spot = 0;

for (let i = 0; i < array.length; i++) {

    if (array[i].length == 3) {
        spot++;
    }
    if (spot==0) {
        let k = array[i];
        k++;
        console.log(k);
    }
    else {
        console.log(array[i] - 1);
    }
}