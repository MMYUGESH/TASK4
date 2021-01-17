var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function () {
    var data = JSON.parse(this.response);

    //population<200000
    var arr = data.filter((element) => {
        return element.population < 200000;
    })
    //name,capital,flag
    console.log(arr);
    let name = [];
    data.forEach(element => {
        name.push("name:", element.name, "capital:", element.capital, "flag:", element.flag);

    });
    console.log(name);
    console.log(data);

    //Get all the countries from Asia continent / “region” using Filter function.

    var ary = data.filter((element) => {
        return element.region === "Asia";
    })
    console.log(ary);
    // Print the country which uses US Dollars as currency.

    var ara = data.filter((element) => {
        if (element.currencies[0].code === "USD") {
            console.log(element.name);
        }
    })
    //console.log(ara);

    //total population
    let total = data.reduce((acc, currentvalue) => {
        return acc + currentvalue.population
    }, 0)
    console.log(total);


}