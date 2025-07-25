# Линейный поиск (Linear Search)

## Суть алгоритма

Линейный (или последовательный) поиск — это базовый алгоритм для поиска элемента в массиве.

Идея простая: перебираем элементы массива **один за другим** и сравниваем с искомым значением. Если нашли — возвращаем индекс. Если дошли до конца и не нашли — возвращаем `-1`.

---

## Применение

- Когда массив **не отсортирован**
- Когда важно найти **первое вхождение**
- Когда нужно пройтись по всем элементам (например, валидация)

---

## Сложность

- **Время (в худшем случае)**: `O(n)`
- **Память**: `O(1)`

---

## Пример

```js
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
