# Programação Para Crianças

Esse repositório se trata da elaboração de um site para ensinar crianças a programar. Nele, a criança encontrará conteúdos em vídeo e jogos que vão ajudá-lo a se tornar um desenvolvedor.

Esse projeto foi realizado como trabalho final do curso de Introdução à Programação com foco em Front-End da Proz.


## Tema-Problema

A todo momento novas tecnologias têm surgido e transformado o mundo em que vivemos, e isso tem feito com que as pessoas precisem mudar um pouco seu comportamento. Segundo especialistas, assim como atualmente o aprendizado em outras línguas é fundamental para o desenvolvimento do profissional no mercado de trabalho, no futuro será necessário o conhecimento em algoritmos e pensamento computacional. Isso ocorrerá porque, com os avanços constante da tecnologia, será necessária uma demanda muito grande de profissionais para trabalhar com elas. 

Logo, o aprendizado em programação será muito importante no desenvolvimento das pessoas no futuro, então por que não os introduzir logo na infância? As novas gerações já estão tendo contato com tecnologia desde cedo, o que cria uma maior familiaridade com ferramentas tecnológicas e maior interesse por esse tema. Não somente isso, crianças possuem facilidade em absorver novos conteúdos, o que ajuda no aprendizado.

Além desses pontos, vale ressaltar que aprender programação não serve apenas para tornar uma pessoa desenvolvedora de software. Esse tipo de aprendizado trás diversos benefícios para o desenvolvimento de habilidades e comportamentos da criança, já que:
- Ajuda a estimular a criatividade e pensamento analítico;
- Torna a criança mais persistente e determinada a superar desafios;
- Relaciona diversos conhecimentos da criança;
- Colabora com a comunicação e trabalho em equipe.

Contudo, deve-se ressaltar que é fundamental um cuidado com o conteúdo e a forma com que vai ser feito esse ensino para as crianças. Por ainda estarem em processo de formação, eles ainda não possuem discernimento para determinar o certo e errado, tornando-os assim vulneráveis a certos tipos de conteúdo. A internet pode ser um lugar perigoso, e cabe aos adultos e responsáveis criar um ambiente seguro para ensinar as crianças.

Portanto, além da necessidade futura, muitos são os benefícios de ensinar a programação para criança. Ressalta-se que deve haver um cuidado especial para esse ensinamento, já que o conteúdo deve ser especial e voltado para esse tipo de público. Diante de tudo isso, decidimos fazer a criação de um site voltado para ensinar programação para crianças como forma de colaborar com o desenvolvimento dos jovens da sociedade. Esse desenvolvimento será para todos, sem distinção de raça, gênero, deficiência ou classe social, de modo a também ajudar a promover uma maior inclusão digital.


## Organização do códiogo

O programa desenvolvido neste repositório foca no Front-End de um site para ensinar programação para crianças, e utiliza apenas HTML, CSS e JS.

### Funcionamento do programa

- O programa desenvolvido contém as seguintes páginas:


| Página              | Descrição                                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Home                | Página principal do site. Nela você consegue ter acesso a todas as outras páginas.                                                              |
| Aprenda jogando     | Página com conteúdo de jogos que ensinam a programar. Para acessar os jogos basta escolher um e clicar em jogar.                              |
| Vídeo aula          | Página com conteúdo de vídeos que ensinam a programar. Para acessar aos vídeos basta escolher um e clicar em assistir.                        |
| Entrar              | Página para o usuário fazer o login no site ou criar o caddastro. Para fazer o login basta preencher todos os campos e clicar em fazer login. Caso o usuário não possua uma conta, basta preencherr o formulário de cadastro e clicar em cadastrar”. |
| Perfil              | Página onde é possível ver as informações do usuário.       |
| Quem somos          | Página falando do site e dos membros da equipe.                   |


### Layout

- O layout do projeto pode ser encontrado no figma [clicando aqui](https://www.figma.com/file/E4EeaMtTVGbNV5s878aOPA/Escola-de-programa%C3%A7%C3%A3o?type=design&node-id=0-1&mode=design&t=OkWSd2eOqocxLvQO-0)



### Organização das pastas do repositório

Todas as páginas html estão na pasta raiz do projeto.

As pastas contidas no projeto são:
- assets - Pasta contendo os conteúdos relacionados a CSS, JS e images
    - css - Contêm todo o conteúdo de css do projeto.
    - images -  Contêm todas as imagens utilizadas no projeto. É subdivida em pastas com o nome de cada página.
    - js - Contêm todo o conteúdo de js do projeto.
- modelagem-banco-de-dados - Pasta contendo a modelagem do banco de dados relacionado ao projeto

As pastas e arquivos com o nome global são de conteúdos que são reutilizados em várias páginas

### Branch

- Será criada uma nova branch para cada página do site, onde será trabalhado tudo relacionado a pagina (HTML, CSS, JS, documentação, etc).
- Essa branch terá a seguinte estrutura: `feat/nomeDaPagina`


### Convenção de Commits

- Os commits vão seguir as seguintes especificações:

| Tipo de Commit | Descrição                                                                                                 |
| -------------- | --------------------------------------------------------------------------------------------------------- |
| `feat`         | Adiciona uma nova funcionalidade ao projeto.                                                              |
| `fix`          | Corrige um bug ou problema no projeto.                                                                    |
| `docs`         | Altera a documentação do projeto. Ex.: README, comentários no código.                                     |
| `style`        | Realiza mudanças na aparência, sem alterar a funcionalidade.                                              |
| `refactor`     | Realiza mudanças no código que não alteram a funcionalidade.                                              |
| `test`         | Adiciona ou modifica testes no projeto.                                                                   |

##### Exemplo commit

`feat: adicionado novo arquivo`


## Regra de Negócio

### Cadastro

Para realizar o cadastro é necessário seguir as seguintes regras:
- Os campos "Nome completo", "e-mail", "Senha" e "Confirme sua Senha" são obrigatórios;
- O campo "Nome completo" deve ter pelo menos 3 caracteres;
- O campo "e-mail" deve conter os caracteres "@" e "." e o formato "XXXX@XXXXX.XXX";
- O campo "Senha" deve ter pelo menos 6 caracteres;
- O campo "Confirme sua Senha" deve ser igual ao de "Senha".

## Equipe

Esse projeto foi realizado pela equipe:

- Rodrigo Santana Pereira
- Viviane Maria Oliveira Santos
