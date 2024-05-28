# Itaú Product Hub
Essa é uma Aplicação criada para um teste, ela serve como um marketplace para que engenheiros publiquem e encontrem produtos digitais. Utiliza Angular no frontend, Node.js e lowdb no backend.

Instruções

Requisitos:
    Node.js ^20.13 (https://nodejs.org/en)
    npm ^10.5.2 (https://nodejs.org/en)
    Angular ^17 (npm install -g @angular/cli)

Clone o projeto

Para rodar o projeto é necessário instalar as dependencias do frontend e do backend

Backend:
Entre na pasta iphbackend (backend) e use o comando:
npm install
Rode o modo dev usando o nodemon:
npm run dev
Servidor backend rodando

Front-end:
Entre na pasta itauproducthubfe (front-end) e use o comando:
npm install
Rode o modo dev usando o comando:
ng serve

Para testar o projeto acesse `http://localhost:4200/` após rodar o servidor e o front-end.

Build:
Para gerar uma build use o comando:
ng build

Unit tests:
(Not yet implemented)
Execute o comando 'ng test'

## Funcionalidades 

### Implementadas

    Autenticação de usuários. (Parcial)
    Armazenamento de dados de usuário. (Completa)
    Listagem de produtos em cards com imagem e informações sobre cada produto. (Completa)
    Paginação dos resultados da consulta para exibir pelo menos 10 produtos por vez. (Parcial)
    Tela de detalhamento do produto ao clicar em um card. (Parcial)

### A Serem Implementadas

    Instruções para Instalação, local e Deploy.
    Pesquisa por produtos ou categorias de produto.
	CRUD de produtos.
	CRUD de usuários.
    Compartilhamento de informações do produto com mídias sociais.
    Desenvolvimento de uma API REST para cadastrar dados de produtos.
    Tela de inclusão de informações do produto com envio de imagens. (Parcial)
	Unittests funcionais para cada component.
    Parametrizar o acesso ao backend.

### Possíveis Melhorias

    Encriptação de senhas. (Hash/SHA/bcrypt)
    Sessão/Cookies para manter dados de sessão do usuário.
    Criação de Produtos e Usuários com passos de verificação. (Evitar duplicidade)
    Autenticação nas requests para evitar ataques direcionados ao Backend.
    Salvar estatísticas de usuário, dashboard.
    Salvar preferências de usuário como darkmode e favoritos.
    Comentarios e commendations(Elogios/recs) em projetos.