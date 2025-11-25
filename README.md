# API Gestão de Produtos (Backend)

![Status](https://img.shields.io/badge/status-concluído-green)
![Linguagem](https://img.shields.io/badge/linguagem-TypeScript-blue.svg)
![Framework](https://img.shields.io/badge/framework-Express-black)
[![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)](./LICENSE)

> Uma API RESTful desenvolvida em Node.js e TypeScript para gerenciar o cadastro de produtos de uma loja virtual. Este projeto serve os dados para a aplicação mobile.

🔗 **Repositório do Frontend:** [Acesse Aqui](https://github.com/jmtmds/Desafio-Frontend.git)

---

## 📜 Sobre o Projeto

Este backend foi construído como parte de um desafio Full Stack. O objetivo é fornecer endpoints para realizar operações de **CRUD** (Create, Read, Update, Delete) de produtos.

O sistema utiliza um armazenamento em memória (array) para simplificar a execução e focar na lógica das rotas e tipagem com TypeScript.

---

## ✨ Funcionalidades

* **Listagem:** Retorna todos os produtos cadastrados (GET `/products`).
* **Cadastro:** Criação de novos produtos com validação de campos obrigatórios (POST `/products`).
* **Edição:** Atualização de nome e preço de um produto existente (PUT `/products/:id`).
* **Remoção:** Exclusão de produtos pelo ID (DELETE `/products/:id`).
* **Segurança:** Configuração de CORS para permitir acesso do frontend.

---

## 🚀 Tecnologias Utilizadas

* **Node.js** & **TypeScript**
* **Express:** Para roteamento e servidor HTTP.
* **UUID:** Para geração de identificadores únicos.
* **Dotenv:** Para gerenciamento de variáveis de ambiente.
* **Cors:** Para controle de acesso HTTP.

---

## ⚙️ Como Executar Localmente

**Pré-requisitos:**
* [Node.js](https://nodejs.org/) instalado.

**Passos:**

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/jmtmds/desafio-backend.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configure o ambiente:**
   * Crie um arquivo `.env` na raiz (baseado no `.env.example`).
   * Defina a porta (ex: `PORT=3000`).

4. **Inicie o servidor:**
   ```bash
   npm run dev
   ```
   *O servidor rodará, por padrão, em `http://localhost:3000`.*

---

## 👨‍💻 Autor

**João Marcos Tavares**

* **LinkedIn:** [linkedin.com/in/jmtmds](https://www.linkedin.com/in/jmtmds)
* **Email:** [jm3tavares@gmail.com](mailto:jm3tavares@gmail.com)
* **GitHub:** [github.com/jmtmds](https://github.com/jmtmds)
