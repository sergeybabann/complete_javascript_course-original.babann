const a = 5

function myFn() { 
    function innerFn() { // объявление функции
    console.log(a) // 5
    }
    innerFn() // вызов функции
}

myFn()


