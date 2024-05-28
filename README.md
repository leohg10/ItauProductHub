# Itaú Product Hub

## Descrição
Itaú Product Hub é uma Single Page Application desenvolvida como parte de um teste técnico. Esta aplicação permite que engenheiros publiquem e encontrem produtos digitais. Ela utiliza Angular para o frontend e Node.js com lowdb para o backend.

## Instruções de Instalação

### Requisitos
- Node.js ^20.13 - [Download](https://nodejs.org/en)
- npm ^10.5.2 - Incluído na instalação do Node.js
- Angular ^17 - Instale globalmente usando `npm install -g @angular/cli`

### Clonando o projeto
Clone o repositório para sua máquina local usando:

```git clone https://github.com/leohg10/ItauProductHub.git```

### Configurando o Backend
1. Entre na pasta `iphbackend`
```cd iphbackend```
2. Instale as dependências:
```npm install```
3. Inicie o servidor em modo de desenvolvimento com `nodemon`:
```npm run dev```

Confirme que o servidor está rodando corretamente.

### Configurando o Frontend
1. Entre na pasta `itauproducthubfe`:
```cd itauproducthubfe```
2. Instale as dependências:
```npm install```
3. Inicie a aplicação em modo de desenvolvimento:
```ng serve```

### Acesso à Aplicação
Acesse `http://localhost:4200/` no seu navegador para testar a aplicação após iniciar o servidor e o frontend.

### Build do Projeto
Para gerar uma build para produção, utilize:
```ng build```

### Testes Unitários
- Testes unitários ainda não foram implementados.

## Funcionalidades

### Implementadas
- **Autenticação de Usuários:** Implementação parcial.
- **Armazenamento de Dados do Usuário:** Completo.
- **Listagem de Produtos:** Produtos são listados em cards com imagens e informações relevantes, implementação completa.
- **Paginação de Resultados:** Implementação parcial para exibir pelo menos 10 produtos por página.
- **Detalhamento de Produto:** Ao clicar em um card de produto, uma nova tela com mais detalhes é exibida, implementação parcial.

### A Serem Implementadas
- Funcionalidades de pesquisa por produtos ou categorias.
- CRUD completo para produtos e usuários.
- Compartilhamento de informações do produto em mídias sociais.
- Finalizar desenvolvimento da API REST para gerenciamento de produtos.
- Tela de inclusão de informações do produto com suporte a envio de imagens, implementação parcial.
- Testes unitários para cada componente.
- Parametrização de acesso ao backend.

### Possíveis Melhorias
- **Segurança:** Utilizar encriptação de senhas (Hash/SHA/bcrypt).
- **Sessão de Usuário:** Implementar cookies para manter dados da sessão.
- **Verificações:** Criar passos de verificação durante a criação de produtos e usuários para evitar duplicidade.
- **Autenticação de Requests:** Reforçar a segurança do backend contra ataques.
- **Personalização:** Permitir que usuários salvem preferências como darkmode e favoritos.
- **Interações Sociais:** Adicionar funcionalidades de comentários e recomendações em produtos.