const up = document.querySelector('.up-button')
const down = document.querySelector('.down-button')

const sidebar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

let active = 0;

up.addEventListener('click', () => {
    change('up')
})
down.addEventListener('click', () => {
    change('down')
})

document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp') {
        change('up')
    } else if (e.key === 'ArrowDown') {
        change('down')
    }

})

function change(direc) {
    if (direc === 'up') {
        active++
        if (active === slidesCount) {
            active = 0
        }
    } else if (direc === 'down') {
        active--
        if (active < 0) {
            active = slidesCount - 1

        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${active * height}px)`
    sidebar.style.transform = `translateY(${active * height}px)`
}