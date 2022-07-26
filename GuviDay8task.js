var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send();
request.onload = function () {
    var countrydetails = JSON.parse(this.response);

    // 1. Get all the countries from the Asia continent /region using the Filter function
    var countriesasia = countrydetails.filter((details) => {
        return (details.continents == 'Asia')
    })
    for (let asia of countriesasia) {
        console.log(asia.name.common);
    }

    // 2. Get all the countries with a population of less than 2 lakhs using Filter function

    var population = countrydetails.filter((people) => {
        return (people.population <= 200000);
    })
    for (let pop of population) {
        console.log(pop.name.common);
    }

    // 3. Print the following details name, capital, flag using forEach function
    let nam = [];
    let cap = [];
    let flag = [];

    countrydetails.forEach(detail => {
        nam.push(detail.name);
        cap.push(detail.capital);
        flag.push(detail.flags);
    });
    console.log(nam);
    console.log(cap);
    console.log(flag);

    // 4. Print the total population of countries using reduce function

    var totalpop = countrydetails.reduce((total, cty) => {
        return (total + (cty.population));
    }, 0);
    console.log(totalpop);

    // 5. Print the country which uses US Dollars as currency.
    let dollars = countrydetails.filter((dollar) => {
        for (let key in dollar.currencies) {
            if (dollar.currencies[key].name === "United States dollar") {
                return dollar
            }
        }
    })
    for (let crncy of dollars) {
        console.log(crncy.name.common);
    }
}
