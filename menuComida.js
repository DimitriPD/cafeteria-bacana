const tipo_salgado = document.querySelector('.card-tipo-salgado') 
const tipo_doce= document.querySelector('.card-tipo-doce') 

const tipos = document.querySelectorAll('.card-tipo')
const menu_opcoes = document.querySelector('.menu-opcoes')

const itens_salgado = [
    {
        img_src: "./imgs/comidas/mini-pao-queijo.jpg",
        img_alt: "cestinho com alguns mini pães de queijo sendo segurados por uma mão",
        nome: "mini pão de queijo"
    },
    {
        img_src: "./imgs/comidas/esfiha-calabresa.jpg",
        img_alt: "esfiha de calabresa com queijo derretido por cima e manjericão",
        nome: "esfiha de calabresa"
    },{
        img_src: "./imgs/comidas/mini-coxinha.jpg",
        img_alt: "4 mini coxinhas em destaque",
        nome: "mini coxinha"
    },{
        img_src: "./imgs/comidas/mini-pastel.jpg",
        img_alt: "cestinho com alguns mini pasteis",
        nome: "mini pastel"
    },
]

const itens_doce = [
    {
        img_src: "./imgs/comidas/cookie.jpg",
        img_alt: "alguns cookies americanos de chocolate espalhados em um pano",
        nome: "cookie de chocolate"
    },
    {
        img_src: "./imgs/comidas/donut_rosa.jpg",
        img_alt: "uma rosquinha rosa",
        nome: "donut rosa: morango"
    },
    {
        img_src: "./imgs/comidas/donuts.jpg",
        img_alt: "um donut de chocolate apoiado em outro",
        nome: "doonut chocolate"
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
        case "salgado":
            menu_opcoes.innerHTML = ''

            itens_salgado.forEach(iten => {
                menu_opcoes.appendChild(
                    new CriaElemento(iten.img_src, iten.img_alt, iten.nome).elemento
                )
            });
            break
        case "doce":
            menu_opcoes.innerHTML = ''

            itens_doce.forEach(iten => {
                menu_opcoes.appendChild(
                    new CriaElemento(iten.img_src, iten.img_alt, iten.nome).elemento
                )
            });
            break
    }
}

// Salgado
tipo_salgado.addEventListener('click', () => {
    alteraContexto()
    tipo_salgado.classList.add("tipo-marcado")
    tipo_salgado.style.transform = 'scale(1.2)'

    adicionaConteudo('salgado')
})
tipo_salgado.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})
// Doce
tipo_doce.addEventListener('click', () => {
    alteraContexto()
    tipo_doce.classList.add("tipo-marcado")
    tipo_doce.style.transform = 'scale(1.2)'

    adicionaConteudo('doce')
})
tipo_doce.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        e.target.click()
    }
})
