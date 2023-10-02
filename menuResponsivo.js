const hamburguer = document.querySelector('.hamburguer')
const nav = document.querySelector('.navegacao')

hamburguer.addEventListener("click", () => {
    nav.classList.toggle("active")
})
hamburguer.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})