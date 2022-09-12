const BASE_URL = 'http://api.coincap.io/v2/assets'
const id = document.querySelector('#crypto-rank')
const form = document.querySelector('form')

const section = document.querySelector('section')
const error = document.querySelector('.error')

const button = document.querySelector('button')

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

let offset = 0

const getCoin = () => {
    coin.innerHTML = ''
    fetch(`https://api.coincap.io/v2/assets?limit=10&offset=${offset}`)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.data)
            const results = data.data
            results.forEach((elem) => {
                console.log(elem)
                const poke = document.createElement('h2')
                poke.innerText = elem.name
                coin.append(poke)
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

button.addEventListener('click', () => {
    offset = 0
    getCoin()
})

prev.addEventListener('click',() => {
    if (offset >= 10) {
        offset -= 10
    }
    getCoin()
})

next.addEventListener('click',() => {
    offset += 10
    if (offset > 100) {
        offset = 90
    }
    getCoin()
})








// form.addEventListener('submit', (event) => {
//     event.preventDefault()

//     if (id.value === '') {
//         error.classList.remove('hidden')
//         error.innerText = 'Must input a correct Pokemon ID.'
//     } else {
//         error.classList.add('hidden')

//         fetch()
//     }
// })

// fetch(BASE_URL)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         console.log(data.data[0].id)


//     })
//     .catch((error) => {
//         console.log(error)
//     })