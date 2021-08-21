const colors = [
    'TURQUOISE', 'PETER RIVER','WET ASPHALT',
    'rgba(39, 174, 96,1.0)', 'rgba(142, 68, 173,1.0)',
    'rgb(230, 126, 34)', 'rgb(236, 240, 241)',
    '#f39c12', '#c0392b', '#7f8c8d'
]

const btn = document.querySelector('#btn').addEventListener('click', changeColor)
const color = document.querySelector('.color')

function changeColor(){
    // Get Random Number
    const randomNumber = getRandomNumber()

    // Change Background Color
    document.body.style.backgroundColor = colors[randomNumber]

    // Change <span> Color Value
    color.textContent = colors[randomNumber]
}

function getRandomNumber(){
    // Return Random Number and Floor it
    return Math.floor(Math.random() * colors.length)
}