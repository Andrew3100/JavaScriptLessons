let string = prompt('Введите предложение: ')

let array = string.split(' ');

for (let i = 0; i<array.length; i++) {
    let k = array[i].length;
    alert('В слове ' + array[i] + ' - ' + k + ' символов')
}