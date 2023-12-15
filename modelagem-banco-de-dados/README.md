Nessa pasta você vai encontrar a modelagem em banco de dados do projeto CodeKids;

A versão mais atual da modelagem é a verssão V2;

Os modelo conceitual e lógico do projeto podem ser encontrado em formato png;

O script foi gerado para o PostgreSQL;

O script está separado em 4 partes:
- ciarTabelas - Arquivo contendo a criação das tabelas;
- inserirDados - Arquivo contendo exemplos de dados para serem inseridos nas tabelas;
- pesquisarDados - Arquivo contendo algumas buscas nas tabelas;
- deletarTabelas - Arquivo contendo os comandos para deletar as tabelas. 

Observações do script:
- Os comandos de deletar as tabelas devem ser executada uma linha de cada vez na ordem em que está;
- As tabelas devem ser criadas uma de cada vez;
- No arquivo de inserir os dados, existe um exemplo de inserção errada.

Os comandos do Postgres podem ser testados de duas formas:
- Utilizando o [SQLite Online](https://sqliteonline.com/), ou;
- Utilizando o docker-compose presente nessa pasta, que contem as imagens do postgres e pgadmin.
    - É necessário criar uma rede para os container com o nome local-network. Para isso pode ser utilizado o comando docker network create local-network;
    - É possível ver como fazer para rodar o docker-compose atraves desse [link](https://danieldcs.com/postgresql-e-pgadmin-com-docker-compose/).