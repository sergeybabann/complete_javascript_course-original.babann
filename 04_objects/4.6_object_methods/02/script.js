const myCity = {
    city: 'New York',
    cityGreeting() {
        console.log('Greetings!!');
    }
}

myCity.cityGreeting()
// 'Greetings!!' 

myCity.city() 
// Uncaught TypeError: myCity.city is not a function