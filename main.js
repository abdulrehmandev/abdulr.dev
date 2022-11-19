const headerToggle = document.querySelector('.header-toggle')
const header = document.querySelector('.header')

headerToggle.addEventListener('click', () => {
    header.setAttribute(
        'data-md-expanded',
        header.getAttribute('data-md-expanded') === 'false'
    )
})