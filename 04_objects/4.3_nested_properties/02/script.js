const myCity = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCity.info.isPopular)
// true

delete myCity.info['isPopular']

console.log(myCity)
// {city: 'New York', info: {country: 'USA'}} 