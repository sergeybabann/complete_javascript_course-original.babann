const a = () => { 
    console.log('Hey there')
} // это функция

a(); // Это вызов функции 

a = 10; // присвоение нового значения переменной а невозможно

a(); // Uncaught TypeError: a is not a function