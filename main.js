const headerToggle = document.querySelector('.header-toggle')
const header = document.querySelector('.header')

headerToggle.addEventListener('click', () => {
    header.setAttribute(
        'data-md-expanded',
        header.getAttribute('data-md-expanded') === 'false'
    )
})

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