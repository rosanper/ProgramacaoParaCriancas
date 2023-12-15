CREATE TABLE jogos (
    id SERIAL PRIMARY KEY,
    img VARCHAR(200) NOT NULL,
    descricaoImg VARCHAR(200) NOT NULL,
    titulo VARCHAR(200) UNIQUE NOT NULL,
    descricao VARCHAR(1000) NOT NULL,
    link VARCHAR(200) NOT NULL
);

INSERT INTO jogos (img, descricaoImg, titulo, descricao, link)
VALUES
    ('assets/images/jogos/codemonkey.png',
     'Imagem mostrando uma tela do jogo',
     'Codemonkey',
     'O jogo ensina a codificar, utilizando uma linguagem real de programação, o CoffeeScript. A partir do aprendizado, o usuário irá descobrir como criar seus próprios jogos para a web com HTML 5.',
     'https://www.codemonkey.com/'),

    ('assets/images/jogos/Cidade-do-Algoritmo.png',
     'Imagem mostrando uma tela do jogo',
     'Cidade do Algoritmo',
     'Ele é bem introdutório, bom para quem está começando a programar e ainda precisa entender as lógicas da programação. No jogo, os pássaros são os personagens principais e que desenvolvem as missões a partir dos comandos básicos. Então, a compreensão da sequência desses comandos é fundamental para a criação da lógica no jogo e, claro, também no dia a dia da área de programação.',
     'https://play.google.com/store/apps/details?id=air.MusterenGames.ElHarezmiCoding&hl=pt_BR&gl=US'),

    ('assets/images/jogos/brain-code.png',
     'Imagem mostrando uma tela do jogo',
     'Brain code',
     'Bem-vindo ao Brain Code, uma coleção de quebra-cabeças desafiadores que testará todo o poder do seu cérebro! Com 50 níveis únicos, você precisará usar sua criatividade, atenção e habilidades de resolução de problemas para resolver todos os quebra-cabeças.',
     'https://play.google.com/store/apps/details?id=com.kk.braincode&hl=pt_BR&gl=US'),

    ('assets/images/jogos/codecombat-header.jpg',
     'Imagem mostrando uma tela do jogo',
     'Code Combat',
     'São jogos com introdução bem amigável indicados para os iniciantes na programação. A didática indica uma curva de aprendizado, iniciando pelos conceitos e comandos básicos de lógica. Dentro do contexto, é possível descobrir o mundo de Python, JavaScript, CoffeeScript e Lua. Então, é possível se familiarizar com os principais conceitos de forma bem dinâmica e interessante.',
     'https://codecombat.com/'),

    ('assets/images/jogos/elevator-saga.jpg',
     'Imagem mostrando uma tela do jogo',
     'Elevator Saga',
     'Elevator Saga não é destinado a quem quer aprender, mas a quem deseja aprimorar seus conhecimentos de Javascript em um jogo de interface simples, mas desafiador. A meta aqui é controlar um elevador e fazê-lo transportar seus usuários da forma mais eficiente possível.',
     'https://play.elevatorsaga.com/'),

    ('assets/images/jogos/flexbox-froggy.jpg',
     'Imagem mostrando uma tela do jogo',
     'FLEXBOX FROGGY',
     'Esse jogo é especificamente destinado a quem deseja aprender como o conceito de flexbox funciona em CSS. Flexbox Froggy torna a assimilação do recurso mais fácil com um simpático sapinho e seus amigos. Ao longo de 24 níveis diferentes, será necessário meter a mão no código para resolver os desafios propostos.',
     'https://flexboxfroggy.com/'),

    ('assets/images/jogos/Human-Resource-Machine.jpg',
     'Imagem mostrando uma tela do jogo',
     'Human Resource Machine',
     'Com personagens fofos, senso de humor de escritório e um sistema de edição de lógica que não mexe com código, Human Resource Machine esconde sua complexidade a um primeiro olhar. No papel de um funcionário que precisa administrar o fluxo de correspondência na empresa, o jogador precisará utilizar 11 comandos diferentes, entre operadores matemáticos e lógicos, para resolver os desafios.',
     'https://tomorrowcorporation.com/humanresourcemachine')


SELECT * from jogos

CREATE TABLE video_aulas (
    id SERIAL PRIMARY KEY,
    img VARCHAR(200) NOT NULL,
    descricaoImg VARCHAR(200) NOT NULL,
    titulo VARCHAR(200) UNIQUE NOT NULL,
    descricao VARCHAR(1000) NOT NULL,
    link VARCHAR(200) NOT NULL
);

INSERT INTO video_aulas (img, descricaoImg, titulo, descricao, link)
VALUES
    ('assets/images/videoAula/O-MINIMO-QUE-VOCE-PRECISA-SABER-ANTES-DE-PROGRAMAR.png',
     'Imagem mostrando uma tela do video',
     'O MÍNIMO QUE VOCÊ PRECISA SABER ANTES DE PROGRAMAR!',
     'Quer se tornar um programador e não sabe como começar? Veja nesse vídeo o que você precisa saber antes de se aventurar nesse novo mundo',
     'https://www.youtube.com/watch?v=BTENKdRVS2U'),

    ('assets/images/videoAula/PROGRAMACAO-para-criancas-Conceitos-basicos-Parte-1.png',
     'Imagem mostrando uma tela do video',
     'Conceitos básicos',
     'Venha aprender aqui nesse vídeo sobre o que é programação e alguns conceitos básicos',
     'https://www.youtube.com/watch?v=tRcr4vtV-4o'),

    ('assets/images/videoAula/PROGRAMACAO-para-criancas-Programacao-em-blocos-Parte-2.png',
     'Imagem mostrando uma tela do video',
     'Programação em blocos',
     'Nesse vídeo você vai aprender conceitos básicos de programação através de comandos em blocos',
     'https://www.youtube.com/watch?v=CANYM34cIuQ'),

    ('assets/images/videoAula/Como-ensinar-linguagem-de-programacao-para-uma-crianca.png',
     'Imagem mostrando uma tela do video',
     'Como fazer um sanduiche',
     'Aprender lógica computacional utilizando tarefas simples do dia a dia como fazer um simples sanduiche',
     'https://www.youtube.com/watch?v=pdhqwbUWf4U&t=1s'),

    ('assets/images/videoAula/Python-para-Criancas.png',
     'Imagem mostrando uma tela do video',
     'Python para Crianças',
     'Venha aprender a programar em Python!!!',
     'https://www.youtube.com/watch?v=DLyzcGYHVpQ&t=809s')
   
SELECT * FROM video_aulas

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome_completo VARCHAR(100) UNIQUE NOT NULL,
    data_nascimento DATE,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
)

INSERT INTO usuarios (nome_completo, data_nascimento, email, senha)
VALUES
    ('Rodrigo Santana', '1924-07-10', 'rodrigo@example.com', 'senhaRodrigo'),

    ('Viviane Oliveira', '1932-04-25', 'viviane@example.com', 'senhaViviane');
    
SELECT * from usuarios   