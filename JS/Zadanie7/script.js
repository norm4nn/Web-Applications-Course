
async function fetchCities() {
    let response = await fetch("http://localhost:3000/cities");
    let result = await response.json();

    result.forEach(function(json, i) {
        let res = [];
        let keys = Object.keys(json);
        keys.forEach(function(key){
            res.push(json[key]);
        })
        result[i] = res;
    });

    return result;
}




const answerA = fetchCities().then(function(cities) {
    const temp = cities.filter(city => city[2] === "małopolskie");
    let result = [];
    temp.forEach(function(city) {
        result.push(" " + city[0]);
    })
    document.getElementById("A").textContent = "A) " + result;
});


const answerB = fetchCities().then(function(cities) {
    let result = [];
    cities.forEach(function(city) {
        result.push(" " + city[0]);
    })
    result = result.filter(city_name => city_name.match(/a/g) 
                                     && city_name.match(/a/g).length === 2);//dwa ZNAKI 'a' !== dwie litery 'a'
 
    document.getElementById("B").textContent = "B) " + result;
});


const answerC = fetchCities().then(function(cities) {
    cities = cities.sort(function(a, b) {
        if (a[5] === b[5])
            return 0;
        return (b[5] - a[5]);
    })
    let result = []

    cities.forEach(function(city) {
        result.push(" " + city[0]);
    })

    document.getElementById("C").textContent = "C) " + result[4];
});


const answerD = fetchCities().then(function(cities) {
    result = [];
    cities.forEach(function(city) {
        if(city[4] > 100000)
            city[0] = city[0] + ' city';
        result.push(" " + city[0]);
    }); 

    document.getElementById("D").textContent = "D) " + result;
});


const answerE = fetchCities().then(function(cities) {
    let moreThan = 0;
    let lessThan = 0;
    cities.forEach(function(city) {
        if (city[4] > 80000)    moreThan += 1;
        if (city[4] < 80000)    lessThan += 1;
    });

    if (moreThan > lessThan) {
        document.getElementById("E").textContent = "E) Więcej jest miast powyżej 80000 mieszkańców ("
                                        + moreThan + "), niż tych poniżej (" + lessThan + ").";
    }
    else if (moreThan < lessThan) {
        document.getElementById("E").textContent = "E) Więcej jest miast poniżej 80000 mieszkańców ("
                                        + lessThan + "), niż tych powyżej (" + moreThan + ").";
    }
    else {
        document.getElementById("E").textContent = "E) Miast poniżej 80000 mieszkańców, jest tyle samo powyżej (" + lessThan + ").";
    }
});


const answerF = fetchCities().then(function(cities) {
    let sum = 0;
    let quantity = 0;
    let temp = cities.filter(city => city[2][0] === "p");
    temp.forEach(function(city) {
        sum += city[3];
        quantity += 1;
    });

    let average = sum/quantity;
    average = average.toPrecision(4);
    document.getElementById("F").textContent = "F) Średnia powierzchnia miast z województw zaczynających się na literę 'P': " + average;
});


const answerG = fetchCities().then(function(cities) {

    let fromPomorskie = cities.filter(city => city[2] === "pomorskie");
    let above5thousand = fromPomorskie.filter(city => city[4] > 5000);

    if (fromPomorskie.length === above5thousand.length)
        document.getElementById("G").textContent = "G) Tak, każde miasto w województwie pomorskim jest większe niż 5000 mieszkańców, a jest ich: " + fromPomorskie.length;
    else
        document.getElementById("G").textContent = "G) Nie, miast większych niż 5000 mieszkańców jest " + above5thousand.length + " na " + fromPomorskie.length + " miast w województwie pomorskim"; 
});