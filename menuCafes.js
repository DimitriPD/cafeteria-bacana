const tipo_quente = document.querySelector('.card-tipo-quente')
const tipo_gelado = document.querySelector('.card-tipo-gelado')
const tipo_bebida = document.querySelector('.card-tipo-bebida')


const tipos = document.querySelectorAll('.card-tipo')
const menu_opcoes = document.querySelector('.menu-opcoes')

const itens_quente = [
    {
        img_src: "./imgs/cafes/cafe-espresso.jpg",
        img_alt: "um xícara de café espresso com um biscoito",
        nome: "café espresso"
    },
    {
        img_src: "./imgs/cafes/cappucino.jpg",
        img_alt: "uma xícara de cappuccino",
        nome: "cappuccino"
    },
    {
        img_src: "./imgs/cafes/mocha.jpg",
        img_alt: "uma xícara de cafe com chocolate no fim da xícara",
        nome: "mocha"
    },
    {
        img_src: "./imgs/cafes/chocolate-quente.jpg",
        img_alt: "uma xícara de chocolate quente com marshmellow",
        nome: "chocolate quente"
    },
    {
        img_src: "./imgs/cafes/matcha.jpg",
        img_alt: "uma xícara de matcha. um tipo de chá",
        nome: "matcha"
    },
]

const itens_gelado = [
    {
        img_src: "./imgs/cafes/cappuccino-gelado.png",
        img_alt: "um copo de cappuccino gelado",
        nome: "cappuccino gelado"
    },
    {
        img_src: "./imgs/cafes/frappe-espresso.jpg",
        img_alt: "um copo de café gelado com chantilly",
        nome: "frappé com chantilly"
    },
    {
        img_src: "./imgs/cafes/cafe-oreo.jpg",
        img_alt: "uma taça de cafe gelado com chantilly e um biscoito oreo",
        nome: "café oreo"
    },
    {
        img_src: "./imgs/cafes/cafe-gelado.jpg",
        img_alt: "uma xícara de cafe com uma bola de sorvete e calda de chocolate",
        nome: "café gelado com sorvete"
    },
]

const itens_bebida = [
    {
        img_src: "./imgs/cafes/soda-maca-verde.jpg",
        img_alt: "um copo de soda italiana de maçã verde",
        nome: "soda italiana: maçã verde"
    },
    {
        img_src: "./imgs/cafes/cha-gelado.jpg",
        img_alt: "uma caneca com chá gelado e pedaços de limão fatiado",
        nome: "chá gelado"
    },
    {
        img_src: "./imgs/cafes/soda-melancia.jpg",
        img_alt: "um copo de soda italiana de melancia",
        nome: "soda italiana: melancia"
    },
]

function alteraContexto() {
    tipos.forEach(tipo => {
        tipo.classList.remove('tipo-marcado')
        tipo.style.transform = 'scale(1)'
    })
}

class CriaElemento {
    elemento

    constructor (img_src, img_alt, texto) {
        const img = document.createElement('img')
        img.setAttribute('src', img_src)
        img.setAttribute('alt', img_alt)

        const p = document.createElement('p')
        p.innerHTML = texto

        const b = document.createElement('button')
        b.setAttribute('value', 'adicionar')
        b.classList.add('btn-adicionar') 
        b.innerHTML = 'Adicionar'
        

        this.elemento = document.createElement('div')
        this.elemento.classList.add('opcao')
        this.elemento.setAttribute("tabindex", 0)

        this.elemento.appendChild(img)
        this.elemento.appendChild(p)
        this.elemento.appendChild(b)
    }   
}

function adicionaConteudo(t) {

    switch (t) {
        case "quente":
            menu_opcoes.innerHTML = ''

            itens_quente.forEach(iten => {
                menu_opcoes.appendChild(
                    new CriaElemento(iten.img_src, iten.img_alt, iten.nome).elemento
                )
            });
            
            break
        case "gelado":
            menu_opcoes.innerHTML = ''

            itens_gelado.forEach(iten => {
                menu_opcoes.appendChild(
                    new CriaElemento(iten.img_src, iten.img_alt, iten.nome).elemento
                )
            });
            break
        case "bebida":
            menu_opcoes.innerHTML = ''

            itens_bebida.forEach(iten => {
                menu_opcoes.appendChild(
                    new CriaElemento(iten.img_src, iten.img_alt, iten.nome).elemento
                )
            });
            break
    }
}

// Quente
tipo_quente.addEventListener('click', () => {
    alteraContexto()
    tipo_quente.classList.add("tipo-marcado")
    tipo_quente.style.transform = 'scale(1.2)'

    adicionaConteudo('quente')
})
tipo_quente.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})
// Gelado
tipo_gelado.addEventListener('click', () => {
    alteraContexto()
    tipo_gelado.classList.add("tipo-marcado")
    tipo_gelado.style.transform = 'scale(1.2)'

    adicionaConteudo('gelado')
})
tipo_gelado.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})
// Bebida
tipo_bebida.addEventListener('click', () => {
    alteraContexto()
    tipo_bebida.classList.add("tipo-marcado")
    tipo_bebida.style.transform = 'scale(1.2)'

    adicionaConteudo('bebida')
})
tipo_bebida.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})
