# 🎬 Cinema API - Backend

API REST desenvolvida em **Node.js** para gerenciamento de um sistema de cinema, com foco em escalabilidade e organização de código utilizando o padrão **Repository**.

---

## 🚀 Sobre o Projeto

Este projeto foi construído para gerenciar o fluxo de dados de um cinema, permitindo o controle de usuários, filmes e salas. A arquitetura foi pensada para separar a lógica de acesso ao banco de dados da lógica de rotas, facilitando a manutenção e testes.

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express.js
- **Banco de Dados:** PostgreSQL
- **Biblioteca de Driver:** `pg` (node-postgres)
- **Variáveis de Ambiente:** `dotenv`

## 🏗️ Arquitetura

O projeto utiliza o padrão **Repository Pattern** com Herança para promover o reuso de código:

- **BaseRepository:** Classe pai que contém métodos genéricos de CRUD (SELECT, INSERT) para evitar repetição de queries SQL.
- **Specific Repositories:** Classes como `UserRepository`, `MovieRepository` e `RoomRepository` que herdam da base e definem as colunas e regras específicas de cada tabela.

## 📍 Endpoints Principais

| Método  | Endpoint     | Descrição                           |
| :------ | :----------- | :---------------------------------- |
| **GET** | `/users`     | Lista todos os usuários cadastrados |
| **GET** | `/movies`    | Lista todos os filmes disponíveis   |
| **GET** | `/rooms`     | Lista todas as salas de cinema      |
| **GET** | `/users/:id` | Busca um usuário específico por ID  |

## 🔧 Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/pgabriel0023-eng/cinema-api-backend.git
   ```
2. **Instale as dependências:**
   ```bash
   npm install
   ```
3. **Configure o arquivo .env: Crie um arquivo .env na raiz do projeto com suas credenciais.**
   ```
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_DATABASE=nome_do_banco
   ```
4. **Inicie o servidor:**
   ```bash
   npm start
   ```
5. **Acesse em: http://localhost:4000**

## 📈 Próximos Passos

- [ ] \*\*Implementação do CRUD completo.
