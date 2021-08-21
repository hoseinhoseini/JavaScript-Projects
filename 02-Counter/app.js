// set initial count
let count = 0

// Access to <button>
let value = document.querySelector('#value')
let btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // select button classes
        let styles = e.currentTarget.classList
        
        // change value of counter by class name
        if (styles.contains('decrease')){
            count--
        }
        else if (styles.contains('increase')){
            count++
        }
        else {
            count = 0
        }

        // adding in html
        value.textContent = count

        // change color of number by value
        if (count > 0){
            value.style.color = 'green'
        }
        if (count < 0){
            value.style.color = 'red'
        }
        if (count == 0){
            value.style.color = 'hsl(209, 61%, 16%)'
        }
    })
})