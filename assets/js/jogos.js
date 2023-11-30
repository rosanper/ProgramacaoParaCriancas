let jogos =[   
    {img: 'assets/images/jogos/codemonkey.png',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'Codemonkey',
     descricao: 'O jogo ensina a codificar, utilizando uma linguagem real de programação, o CoffeeScript. A partir do aprendizado, o usuário irá descobrir como criar seus próprios jogos para a web com HTML 5.',
     link: 'https://www.codemonkey.com/'
    },
    {img: 'assets/images/jogos/Cidade-do-Algoritmo.png',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'Cidade do Algoritmo',
     descricao: 'Ele é bem introdutório, bom para quem está começando a programar e ainda precisa entender as lógicas da programação. No jogo, os pássaros são os personagens principais e que desenvolvem as missões a partir dos comandos básicos. Então, a compreensão da sequência desses comandos é fundamental para a criação da lógica no jogo e, claro, também no dia a dia da área de programação.',
     link: 'https://play.google.com/store/apps/details?id=air.MusterenGames.ElHarezmiCoding&hl=pt_BR&gl=US'
    },
    {img: 'assets/images/jogos/brain-code.png',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'Brain code',
     descricao: 'Bem-vindo ao Brain Code, uma coleção de quebra-cabeças desafiadores que testará todo o poder do seu cérebro! Com 50 níveis únicos, você precisará usar sua criatividade, atenção e habilidades de resolução de problemas para resolver todos os quebra-cabeças.',
     link: 'https://play.google.com/store/apps/details?id=com.kk.braincode&hl=pt_BR&gl=US'
    },
    {img: 'assets/images/jogos/codecombat-header.jpg',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'Code Combat',
     descricao: 'São jogos com introdução bem amigável indicados para os iniciantes na programação. A didática indica uma curva de aprendizado, iniciando pelos conceitos e comandos básicos de lógica. Dentro do contexto, é possível descobrir o mundo de Python, JavaScript, CoffeeScript e Lua. Então, é possível se familiarizar com os principais conceitos de forma bem dinâmica e interessante.',
     link: 'https://codecombat.com/'
    },
    {img: 'assets/images/jogos/elevator-saga.jpg',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'Elevator Saga',
     descricao: 'Elevator Saga não é destinado a quem quer aprender, mas a quem deseja aprimorar seus conhecimentos de Javascript em um jogo de interface simples, mas desafiador. A meta aqui é controlar um elevador e fazê-lo transportar seus usuários da forma mais eficiente possível.',
     link: 'https://play.elevatorsaga.com/'
    },
    {img: 'assets/images/jogos/flexbox-froggy.jpg',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'FLEXBOX FROGGY',
     descricao: 'Esse jogo é especificamente destinado a quem deseja aprender como o conceito de flexbox funciona em CSS. Flexbox Froggy torna a assimilação do recurso mais fácil com um simpático sapinho e seus amigos. Ao longo de 24 níveis diferentes, será necessário meter a mão no código para resolver os desafios propostos.',
     link: 'https://flexboxfroggy.com/'
    },
    {img: 'assets/images/jogos/Human-Resource-Machine.jpg',
     descricaoImg: 'Imagem mostrando uma tela do jogo',
     titulo: 'Human Resource Machine',
     descricao: 'Com personagens fofos, senso de humor de escritório e um sistema de edição de lógica que não mexe com código, Human Resource Machine esconde sua complexidade a um primeiro olhar. No papel de um funcionário que precisa administrar o fluxo de correspondência na empresa, o jogador precisará utilizar 11 comandos diferentes , entre operadores matemáticos e lógicos, para resolver os desafios.',
     link: 'https://tomorrowcorporation.com/humanresourcemachine'
    },
]


let cardDestaque = document.getElementById('card-destaque')
let indice = gerarInteiroAleatorio(0,jogos.length)
cardDestaque.innerHTML = `
                        <img class="card-destaque-img" src=${jogos[indice].img} alt=${jogos[indice].descricaoImg}>
                        <div class="card-destaque-conteudo">
                            <h5 class="card-title">${jogos[indice].titulo}</h5>
                            <p>${jogos[indice].descricao}</p>
                            <a href=${jogos[indice].link} target="_blank" class="btn btn-primary btn-modificador">Jogar</a>
                        </div>`


let cardsLine = document.getElementById('cards-line')


for (const jogo of jogos) {

    if(jogo.titulo !== jogos[indice].titulo) {
        
        let card = document.createElement('div')
        card.className = 'card'
        card.style.width = '18rem'
        card.innerHTML = `
                            <img src=${jogo.img} class="card-img-top" alt=${jogo.descricaoImg}>
                            <div class="card-body">
                            <h5 class="card-title">${jogo.titulo}</h5>
                            <p class="card-text">${jogo.descricao}</p>
                            <a href=${jogo.link} target="_blank" class="btn btn-primary btn-modificador">Jogar</a>
                            </div>`
        cardsLine.appendChild(card)
    }
}

function gerarInteiroAleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}