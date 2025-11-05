# Динамично рендиране на списък: React vs. Vanilla JavaScript

Този раздел разглежда два подхода за динамично рендиране на списък от цели числа.

## Vanilla JavaScript подход

```javascript
window.onload = () => {
  const rootElement = document.getElementById("root");
  const ints = [1, 2, 3];

  ints.forEach(i => {
    let li = document.createElement("li");
    li.innerHTML = i;
    rootElement.appendChild(li);
  });
};
```

### Как работи?

1. Взима се елементът с `id="root"`.  
2. Итерираме през масива `ints` с `forEach`, без да генерираме нов масив.  
3. За всяко число (1, 2, 3) се създава `<li>` елемент и се добавя директно към `rootElement

Тук се използва forEach, защото целта е да извършим страничен ефект (добавяне в DOM) за всеки обект. Няма нужда да връщаме нов масив — нещо, което map обикновено прави.

## React подход

```javascript
window.onload = () => {
  const rootElement = document.getElementById("root");
  const ints = [1, 2, 3];

  const root = ReactDOM.createRoot(rootElement);
  const childrenElements = ints.map(id => {
    return React.createElement("li", null, id);
  });

  root.render(childrenElements);
};
```

### Как работи?

1. Вземаме референция към HTML елемента с `id="root"`, който ще бъде контейнерът (или „коренът“) за нашето React приложение.  
2. Масивът `ints` съдържа стойностите, които искаме да изобразим (1, 2 и 3).  
3. Прилагаме `ints.map(...)`, за да създадем масив от React елементи — всеки елемент представлява `<li>` в React контекста.  
4. React използва този масив от елементи, за да изгради или обнови виртуалния DOM и да го „нанесе” в реалния DOM по най-оптималния начин.

### Защо предпочитаме `map`?

- Методът `map` връща нов масив, съдържащ елементите, които искаме да рендираме. При React често се налага да генерираме именно масив от елементи, който да бъде подаден към метода за рендиране (`root.render()` или в класически React — `ReactDOM.render()`).
- `map` улеснява дадена трансформация от списък от различни стойности към списък от React елементи.

---

