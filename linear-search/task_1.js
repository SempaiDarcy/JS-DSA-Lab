// Пример массива
const array = [1, 4, 5, 8, 9, 10, 11, 3, 6, 14, 7];

/*
=========================================
ВАРИАНТ 1: Глобальная переменная iterationNum
=========================================

Этот подход работает, но имеет важные недостатки:
- iterationNum хранится вне функции — это делает функцию не чистой (непредсказуемой).
- Если вызвать функцию несколько раз, значение iterationNum будет накапливаться.
*/

let iterationNum = 0;

function linearSearchOld(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        iterationNum++; // каждый шаг увеличивает глобальный счётчик
        if (arr[i] === num) {
            return i; // возвращаем индекс при первом совпадении
        }
    }
    return null; // если не нашли — возвращаем null
}

console.log('[Вариант 1] Индекс:', linearSearchOld(array, 7));
console.log('[Вариант 1] Количество итераций:', iterationNum);


/*
=========================================
ВАРИАНТ 2: Чистая функция, возвращающая объект
=========================================

Этот вариант считается правильным и безопасным:
- Не использует глобальные переменные.
- Возвращает сразу и индекс, и количество итераций.
- Предсказуем: каждый вызов функции даёт точный результат, без сторонних эффектов.
*/

function linearSearch(arr, num) {
    let iterations = 0;

    for (let i = 0; i < arr.length; i++) {
        iterations++; // локальный счётчик итераций
        if (arr[i] === num) {
            return { index: i, iterations }; // возвращаем объект с результатом
        }
    }

    return { index: -1, iterations }; // если элемент не найден — индекс -1
}

const result = linearSearch(array, 7);
console.log('[Вариант 2] Индекс:', result.index);
console.log('[Вариант 2] Количество итераций:', result.iterations);


/*
=========================================
ИТОГ:
- Вариант 1 может работать для обучения, но не масштабируется.
- Вариант 2 — это хорошая практика: чистая функция, без побочных эффектов.
- Вариант 2 легко тестировать, повторно использовать и расширять (например, логировать все шаги).
*/
