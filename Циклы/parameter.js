/*
  ЗАДАЧА:
*   Ввести в окно предложение, разобрать его по словам.
*   Каждое слово необходимо вывести в отдельном окне
* */

/*РЕШЕНИЕ:*/

/*Ввод предложения*/
let string = prompt('Введите предложение');

/*Разбираем предложение на массив слов через пробел*/
let word_array = string.split(' ');

for (let i = 0; i<word_array.length; i++) {
    /*Обращение к элементу массива по индексу*/
    alert(word_array[i]);
}