# Динамично рендиране на списък: React vs. Vanilla JavaScript

Предоставените кодови фрагменти илюстрират два различни подхода за динамично рендиране на списък с цели числа като `<li>` елементи в HTML документ. Първият използва React (популярна JavaScript библиотека за изграждане на потребителски интерфейси), а вторият — ванилен JavaScript (основния език на JavaScript). 

Основната разлика между тях не е свързана с използването на `map` вместо `forEach`, а по-скоро с различните парадигми и механизми на работа на React в сравнение с прямата (vanilla) манипулация на DOM. По-долу са описани разликите между тези два кода и е изяснено погрешното схващане, че „не може да се използва `forEach`“ в React.

---

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

При този подход функцията `React.createElement` се използва за създаване на виртуални DOM елементи за всеки елемент от масива `ints`. Методът `map` връща нов масив от React елементи (`<li>`), който след това се предава на `root.render()`. Тук React използва виртуален DOM, за да определи най-ефективния начин за отразяване на тези елементи в реалния DOM.

### Ключови точки

- **Виртуален DOM**: React поддържа виртуален DOM, който прави обновяванията по-ефективни, като сравнява промените с виртуално копие на DOM.  
- **Масив от елементи**: `root.render()` може да приеме масив от React елементи. Използването на `map` е естествено, тъй като нужното поведение е „трансформация“ на масива от стойности в масив от React елементи.

---

## Vanilla JavaScript подход

```javascript
window.onload = () => {
   const rootElement = document.getElementById("root");
   const ints = [1, 2, 3];

   ints.forEach(i => {
     let li = document.createElement("li");
     li.innerHTML = i;
