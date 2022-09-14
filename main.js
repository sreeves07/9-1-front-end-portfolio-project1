const BASE_URL = 'http://api.coincap.io/v2/assets'
const id = document.querySelector('#crypto-rank')
const form = document.querySelector('form')
const button = document.querySelector('button')
const section = document.querySelector('section')
const error = document.querySelector('.error')
const searched = document.getElementById('search')
const sidebar = document.querySelector('.sidebar')

function fetchData() {
    fetch(`https://api.coincap.io/v2/assets/bitcoin`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)

        const name = data.data.name
        const rank = data.data.rank
        const symbol = data.data.symbol
        const link = data.data.explorer
        const percentChange = Number(data.data.changePercent24Hr).toFixed(2)
        const price = Number(data.data.priceUsd).toFixed(2)
        const marketCap = Number(data.data.marketCapUsd).toFixed(2)
        let dollarUSLocale = Intl.NumberFormat('en-US')
        let marketCapPrice = dollarUSLocale.format(marketCap)
        let dollarPrice = dollarUSLocale.format(price)
    
        section.innerHTML = `<h2>${name}</h2>\n
        <p><strong>Symbol:</strong> ${symbol}</p>\n
        <p><strong>Rank:</strong> ${rank}</p>\n
        <p><strong>Current Price:</strong> $${dollarPrice}</p>\n
        <p><strong>Percent Change (24 hours):</strong> ${percentChange}</p>\n
        <p><strong>Market Cap:</strong> $${marketCapPrice}</p>
        <p><strong>More Info:</strong> <a href=${link}>More Info</a></p>\n`

        
        id.value = '' 
    })
    .catch((error) => {
        console.log(error)})
}

fetchData()


form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (id.value === '') {
        error.classList.remove('hidden')
        error.innerText = 'Must input a coin name.'
    } else {
        error.classList.add('hidden')

        fetch(`https://api.coincap.io/v2/assets/${id.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)

            const name = data.data.name
            const rank = data.data.rank
            const symbol = data.data.symbol
            const link = data.data.explorer
            const percentChange = Number(data.data.changePercent24Hr).toFixed(2)
            const price = Number(data.data.priceUsd).toFixed(2)
            const marketCap = Number(data.data.marketCapUsd).toFixed(2)
            let dollarUSLocale = Intl.NumberFormat('en-US')
            let marketCapPrice = dollarUSLocale.format(marketCap)
            let dollarPrice = dollarUSLocale.format(price)
            
    
            section.innerHTML = `<h2>${name}</h2>\n
            <p><strong>Symbol:</strong> ${symbol}</p>\n
            <p><strong>Rank:</strong> ${rank}</p>\n
            <p><strong>Current Price:</strong> $${dollarPrice}</p>\n
            <p><strong>Percent Change (24 hours):</strong> ${percentChange}</p>\n
            <p><strong>Market Cap:</strong> $${marketCapPrice}</p>
            <p><strong>More Info:</strong> <a href='${link}' target='_blank'>More Info</a></p>\n`
            
            id.value = '' 
            error.innerText = ''

            // const html = data.da9ta.map(coin => {
            //     return `<p> ${coin.rank}. ${coin.name}</p>`
            // })
            // console.log(html)

        })
        .catch((fetchError) => {
            error.innerText = `must input correct coin name. Check spelling.`
        })
    }
    
})

