let videos =[
    {img: 'assets/images/videoAula/O-MINIMO-QUE-VOCE-PRECISA-SABER-ANTES-DE-PROGRAMAR.png',
     descricaoImg: 'Imagem mostrando uma tela do video',
     titulo: 'O MÍNIMO QUE VOCÊ PRECISA SABER ANTES DE PROGRAMAR!',
     descricao: 'Quer se tornar um programador e não sabe como começar? Veja nesse vídeo o que você precissa saber antes de se aventurar nesse novo mundo',
     link: 'https://www.youtube.com/watch?v=BTENKdRVS2U'
    },
    {img: 'assets/images/videoAula/PROGRAMACAO-para-criancas-Conceitos-basicos-Parte-1.png',
     descricaoImg: 'Imagem mostrando uma tela do video',
     titulo: 'Conceitos básicos',
     descricao: 'Venha aprender aqui nesse vídeo sobre o que é programação e alguns conceitos básicos',
     link: 'https://www.youtube.com/watch?v=tRcr4vtV-4o'
    },
    {img: 'assets/images/videoAula/PROGRAMACAO-para-criancas-Programacao-em-blocos-Parte-2.png',
     descricaoImg: 'Imagem mostrando uma tela do video',
     titulo: 'Programação em blocos',
     descricao: 'Nesse vídeo você vai aprender conceitos básicos de programação através de comandos em blocos',
     link: 'https://www.youtube.com/watch?v=CANYM34cIuQ'
    },
    {img: 'assets/images/videoAula/Como-ensinar-linguagem-de-programacao-para-uma-crianca.png',
     descricaoImg: 'Imagem mostrando uma tela do video',
     titulo: 'Como fazer um sanduiche',
     descricao: 'Aprender lógica computacional utilizando tarefas simples do dia a dia como fazer um simples sanduiche',
     link: 'https://www.youtube.com/watch?v=pdhqwbUWf4U&t=1s'
    },
    {img: 'assets/images/videoAula/Python-para-Criancas.png',
     descricaoImg: 'Imagem mostrando uma tela do video',
     titulo: 'Python para Crianças',
     descricao: 'venha aprender a programar em Python!!!',
     link: 'https://www.youtube.com/watch?v=DLyzcGYHVpQ&t=809s'
    },
]   

// Determina a quantidade de janelas no Carousel
let qntIndicators = 2

// Criando o Carousel
let carouselIndicators = document.getElementById('carousel-indicators')
for (let i = 0; i < qntIndicators; i++) {
    if(i === 0){
        carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide ${i+1}"></button>`
    } else {
        carouselIndicators.innerHTML += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`
    }
}

let indices = []
for (let i = 0; i < qntIndicators; i++) {
    let indice = 0
    do{
        indice = gerarInteiroAleatorio(0,videos.length)
    } while(indices.includes(indice))
    indices.push(indice)
}

let carouselInner = document.getElementById('carousel-inner')
for (const indice of indices) {
    let divCarousel = document.createElement('div')
    divCarousel.className = 'carousel-item active'
    divCarousel.innerHTML = `
                            <img src=${videos[indice].img} class="d-block w-100" alt=${videos[indice].descricaoImg}>
                            <div class="carousel-caption d-none d-md-block carousel-background">
                            <h5>${videos[indice].titulo}</h5>
                            <p>${videos[indice].descricao}</p>
                            <a href=${videos[indice].link} target="_blank" class="btn btn-primary btn-modificador">Assistir</a>
                            </div>`
    carouselInner.appendChild(divCarousel)
}

// Criando os Cards
let cardsLine = document.getElementById('cards-line')
for (const video of videos) {
 
        let card = document.createElement('div')
        card.className = 'card'
        card.style.width = '18rem'
        card.innerHTML = `
                            <img src=${video.img} class="card-img-top" alt=${video.descricaoImg}>
                            <div class="card-body">
                            <h5 class="card-title">${video.titulo}</h5>
                            <p class="card-text">${video.descricao}</p>
                            <a href=${video.link} target="_blank" class="btn btn-primary btn-modificador">Jogar</a>
                            </div>`
        cardsLine.appendChild(card)
}

// Função para gerar número aleatório 
function gerarInteiroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}