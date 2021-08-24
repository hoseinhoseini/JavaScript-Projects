// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()



// ********** close links ************
const linkContainer = document.querySelector('.links-container')
const menuToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')


menuToggle.addEventListener('click', function (){
    const containerHeight = linkContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if (containerHeight === 0) {
        linkContainer.style.height = `${linksHeight}px`
    }
    else {
        linkContainer.style.height = 0
    }
})


// ********** fixed navbar ************
const navbar = document.querySelector('#nav')
const topLink = document.querySelector('.top-link')

document.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height

    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav')
    }
    else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link')
    }
    else {
        topLink.classList.remove('show-link')
    }
})


// ********** smooth scroll ************
// select links
const scrollLink = document.querySelectorAll('.scroll-link')

scrollLink.forEach((link) => {
    link.addEventListener('click', function (e) {
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.querySelector('#' + id)
        
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linkContainer.getBoundingClientRect().height
        const navFixed = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight

        if (!navFixed) {
            position -= navHeight
        }

        if (navHeight > 82) {
            position += containerHeight
        }

        window.scrollTo({
            left: 0,
            top: position
        })

        linkContainer.style.height = 0;
    })
})