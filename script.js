let myArray = [];

document.getElementById('array-form').addEventListener('submit', function (e) {
    e.preventDefault();
    let arrayInput = document.getElementById('array-input').value;
    myArray.push(parseInt(arrayInput, 10));
    document.getElementById('array-display').innerHTML = 'Массив: ' + JSON.stringify(myArray);
    setResultInputEmpty();
});

//Вказати підготовлений масив
document.getElementById('setPreSetArray').addEventListener('click', function () {
    myArray = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
    setResultInputEmpty();
    document.getElementById('array-display').innerHTML = 'Массив: ' + JSON.stringify(myArray);
});

//Відсортувати масив за зростанням
document.getElementById('task1_1').addEventListener('click', function () {
    myArray.sort((a, b) => a - b);
    document.getElementById('array-display').innerHTML = 'Массив: ' + JSON.stringify(myArray);
    setResultInputEmpty();
});

//Видалити елементи з масиву з 2 по 4 (включно)
document.getElementById('task1_2').addEventListener('click', function () {
    if (myArray.length < 4) {
        alert('Массив закороткий')
    } else {
        myArray.splice(2, 3);
    }
    document.getElementById('array-display').innerHTML = 'Массив: ' + JSON.stringify(myArray);
    setResultInputEmpty();
});

//Знайти суму та кількість позитивних елементів
document.getElementById('task2').addEventListener('click', function () {
    const pos = myArray.filter(num => num > 0);
    const sum = pos.reduce((acc, num) => acc + num, 0);
    document.getElementById('result-display').textContent = `Сума позитивних елементів: ${sum}, Кількість позитивних елементів: ${pos.length}`;
});

//Знайти мінімальний елемент масиву та його порядковий номер
document.getElementById('task3').addEventListener('click', function () {
    let min = Number.MAX_VALUE;
    let index = -1;

    myArray.forEach(num => {
        if (num < min) {
            min = num;
            index = myArray.indexOf(num);
        }
    });

    document.getElementById('result-display').textContent = `Мінімальний елемент масиву: ${min}, Його порядковий номер: ${index}`;
});

/////////////////////////////////////

//Знайти максимальний елемент масиву та його порядковий номер.
document.getElementById('task4').addEventListener('click', function () {
    let max = Number.MIN_VALUE;

    let index = -1;

    myArray.forEach(num => {
        if (num > max) {
            max = num;
            index = myArray.indexOf(num);
        }
    });


    document.getElementById('result-display').textContent = `Максимальний елемент масиву: ${max}, Його порядковий номер: ${index}`;
});

//Визначити кількість негативних елементів
document.getElementById('task5').addEventListener('click', function () {
    let countOfNegative = 0;

    myArray.forEach(num => {
        if (num < 0) {
            countOfNegative++;
        }
    });


    document.getElementById('result-display').textContent = `кількість негативних елементів: ${countOfNegative}`;
});

//Знайти кількість непарних позитивних елементів.
document.getElementById('task6').addEventListener('click', function () {
    let countOfNegativeEven = 0;

    myArray.forEach(num => {
        if (num >= 0 && num % 2 == 1) {
            countOfNegativeEven++;
        }
    });


    document.getElementById('result-display').textContent = ` кількість непарних позитивних елементів: ${countOfNegativeEven}`;
});

//Знайти кількість парних позитивних елементів.
document.getElementById('task7').addEventListener('click', function () {
    let countOfNegativeEven = 0;

    myArray.forEach(num => {
        if (num >= 0 && num % 2 == 0) {
            countOfNegativeEven++;
        }
    });


    document.getElementById('result-display').textContent = ` кількість парних позитивних елементів: ${countOfNegativeEven}`;
});


//Знайти суму парних позитивних елементів.
document.getElementById('task8').addEventListener('click', function () {

    let count = 0;

    myArray.forEach(num => {
        if (num >= 0 && num % 2 == 0) {
            count += num;
        }
    });


    document.getElementById('result-display').textContent = `Сума парних позитивних елементів: ${count}`;
});

//Знайти суму непарних позитивних елементів.
document.getElementById('task9').addEventListener('click', function () {

    let count = 0;

    myArray.forEach(num => {
        if (num >= 0 && num % 2 == 1) {
            count += num;
        }
    });


    document.getElementById('result-display').textContent = `Сума непарних позитивних елементів: ${count}`;
});


//Знайти добуток  позитивних елементів.
document.getElementById('task10').addEventListener('click', function () {

    let product = 1;

    myArray.forEach(num => {
        if (num > 0) {
            product *= num;
        }
    });

    document.getElementById('result-display').textContent = `Сума непарних позитивних елементів: ${product}`;
});


//Знайти найбільший серед елементів масиву, решту занулити.
document.getElementById('task11').addEventListener('click', function () {
    let max = Number.MIN_VALUE;

    console.log(myArray);

    myArray.forEach(num => {
        if (num > max) {
            max = num;
        }
    });

    console.log(max);

    document.getElementById('result-display').textContent = `Максимальний елемент масиву: ${max}`;
    myArray = [max];
    document.getElementById('array-display').innerHTML = 'Массив: ' + JSON.stringify(myArray);
    console.log('task11');
});




function setResultInputEmpty() {
    document.getElementById('result-display').value = '';
}