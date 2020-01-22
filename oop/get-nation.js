/*const getNation = (short) => new Promise ((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e)=>{
        if(e.target.readyState === 4 && e.target.status === 200){
            const data = JSON.parse(e.target.response)
            data.forEach((country)=>{
                if (country.alpha2Code === short){
                    resolve(country)
                }
            })
            reject(`did not find a country with abbrievation ${short}`)
        } else if (e.target.readyState === 4 && e.target.status != 200){
            reject('Some Network Problem prevented this from working')
        }
    })
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
})
*/
const getNation = (shortName) => {
    fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200){
            return response.json() // a new Promise
        }
    }).then((response) => {
        /*
        response.forEach((country)=>{
            if (country.alpha2Code === shortName){
                return console.log(country.name)
            }
        })*/
        const newNation = response.filter((country) => country.alpha2Code === shortName)
        if (newNation.length === 1){
            console.log(newNation[0].name)
        }else{
            console.log(`Could not find a nation with short name ${shortName}`)
        }
    }).catch((error) => {
        console.log(error)
    })
}

getNation('CA')
getNation('MX')
getNation('XX')
/*
fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    if (response.status === 200) {
        return response.json() // returns a promise
    } else {
        throw new Error ('No Puzzle here')
    }
}).then((data) => {
    console.log(data.puzzle) // the promise has been returned
}).catch((error) => {
    console.log(error)
})
*/