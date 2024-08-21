# Sistema de Autenticação NestJS

![Logo do Projeto](caminho/para/imagem1.png)

![Exemplo de Autenticação](caminho/para/imagem2.png)

## Descrição

Este projeto é um sistema de autenticação completo desenvolvido com NestJS. Ele inclui funcionalidades como verificação de e-mail, redefinição de senha e autenticação baseada em JWT. Além disso, o projeto utiliza templates de e-mail personalizáveis com Handlebars e integração com serviços de e-mail via Nodemailer.

## Tecnologias Utilizadas

- 🚀 **NestJS**: Framework para construção de aplicações server-side eficientes.
- 🔐 **JWT (JSON Web Token)**: Autenticação segura baseada em tokens.
- ✨ **Handlebars**: Motor de templates para e-mails personalizados.
- 📧 **Nodemailer**: Biblioteca para envio de e-mails.
- 🗃️ **TypeORM**: ORM para gerenciamento de banco de dados.
- 🐘 **PostgreSQL**: Banco de dados relacional.
- 🐳 **Docker**: Containerização da aplicação para fácil deploy e ambiente de desenvolvimento consistente.

## Rotas da API

### Autenticação

- `POST /auth/login`: Gera um token JWT para autenticação. O tempo de expiração do token é definido na configuração do projeto.
- `POST /auth/verifyemail`: Verifica o e-mail do usuário utilizando um código enviado anteriormente. O código deve ser passado no corpo da requisição (`body`).
- `POST /auth/resetpassword`: Envia um e-mail para redefinição de senha. O e-mail do usuário deve ser passado no corpo da requisição (`body`).

### Usuários

- `POST /users/createUser`: Registra um novo usuário no banco de dados. O corpo da requisição (`body`) deve conter o `email`, `username` e `senha`.
- `POST /users/banUser`: Bane um usuário específico, desativando seu acesso ao sistema.
- `DELETE /users/removeUser`: Remove um usuário do banco de dados.

## Como Rodar

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd seu-repositorio
   npm install
   nest start
   ```

3. Configure as variáveis de ambiente no arquivo `.env`(seguindo o `.env.example`).

4. Suba os containers com Docker:

   ```bash
   docker-compose up -d
   ```

5. Acesse a aplicação em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
