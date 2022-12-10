
// mobile navbar toggle
const headerToggle = document.querySelector('.header-toggle')
const primayNav = document.querySelector('.primary-navigation')

headerToggle.addEventListener('click', () => {
    let ariaExpanded = primayNav.getAttribute('aria-expanded') === 'false'
    primayNav.setAttribute('aria-expanded', ariaExpanded)
    document.body.style.overflow = ariaExpanded ? 'hidden' : 'auto'
})

// theme toggle button
const themeToggle = document.querySelector('.theme-toggle')

themeToggle.addEventListener('click', () => {
    themeToggle.toggleAttribute('data-toggled')
    document.body.classList.toggle('dark-theme')
    headerToggle.toggleAttribute('data-toggled')    
})

// moving banner
const bannerHead1 = document.querySelector('.heading-1')
const bannerHead2 = document.querySelector('.heading-2')

window.addEventListener('scroll', () => {
    let scrollValue = window.scrollY

    if (scrollValue >= 170) {
        let value = scrollValue - 170
        bannerHead1.style.transform = `translate(${(value / 2)}px)`
        bannerHead2.style.transform = `translate(-${value / 2}px)`
    }
})