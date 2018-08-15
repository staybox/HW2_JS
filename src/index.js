/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn){
    for(let i=0;i<array.length;i++){
        fn(array[i], i, array)
    }
}



/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */

function map(array, fn) {
    var arr = [];
    for(let i=0;i<array.length;i++){
        arr.push(fn(array[i], i, array));
    }
    return arr;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var result;
    var i;
    if(initial === undefined){
        result = array[0];
         i = 1;
    }else{
        result = initial;
        i = 0;
    }
    for(i;i<array.length;i++){
        result = fn(result, array[i], i, array);
    }
    return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
    let array = [];
    for (let key in obj) {
       array.push(key.toUpperCase());
    }
    return array;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

function slice(array, begin = 0, end = array.length) {
    // Определение нового массива куда будут парситься данные
    let arr =[];

    // Проверки
    if(begin < 0){
        begin = begin + array.length;
    }
    // Если после сложения, begin все равно меньше нуля то приводим к нулю иначе не будет работать
    if(begin < 0){
        begin = 0;
    }

    // Если end меньше нуля то складываем это значение с длиной массива
    if (end < 0){
        end = end + array.length;
    }

    // Если end больше длины массива то назначаем end = длина массива
    if(end > array.length){
        end = array.length;
    }

    // Проход по массиву
    for(let i = begin;i < end; i++){
        arr.push(array[i]);
    }

    return arr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {

    let proxy = new Proxy(obj, {

        get(target, prop) {
            //alert(`Чтение ${prop}`);
            return target[prop];
        },
        set(target, prop, value) {
            //alert(`Запись ${prop} ${value}`);
            target[prop] = value * value;
            return true;
        }
    });

    return proxy;
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};