const BASE_URL = 'http://api.coincap.io/v2/assets'

fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })