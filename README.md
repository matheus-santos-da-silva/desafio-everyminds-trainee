# Desafio Everyminds para Desenvolvedor Trainee

* O que consiste o desafio?

![Desafio](./frontend//public//images/imagem-desafio.png)

### 📋 Pré-requisitos

Primeiramente é necessário baixar o [Docker](https://docs.docker.com/) para o [Windows](https://docs.docker.com/desktop/install/windows-install/), ou para o [Linux](https://docs.docker.com/desktop/install/mac-install/) para conseguir rodar o [PostgreSQL](https://www.postgresql.org/docs/) através dele. 

Precisaremos também do [NodeJS](https://nodejs.org/en/download) instalado na nossa máquina.

Depois de baixar e instalar o Docker, vamos baixar a imagem do PostgreSQL 

```
 $ docker pull postgres
```

### 🔧 Instalação Backend

Siga as instruções para a instalação do projeto em sua máquina

#### Clone este repositório

```
$ git clone https://github.com/matheus-santos-da-silva/desafio-everyminds-trainee
```
#### Acesse a pasta do projeto em seu cmd e em seguida abra no seu Vscode

```
$ cd desafio-everymids-trainee

$ code .
```
#### Abra a pasta a pasta **backend** e instale suas dependências

```
$ yarn install 

ou

$ npm install
```
#### Renomeie o arquivo **.env.example** para **.env**, e preencha todas as variáveis que estão lá: **PORT, DATABASE_URL e JWT_SECRET**
 
```
PORT= (Porta que o projeto vai rodar - Ex: 3333)

DATABASE_URL= (url do seu banco de dados - Ex: postgresql://postgres:postgres@localhost:5432/desafio-everymids)
```
#### Inicie o Docker Compose 

```
$ docker-compose up -d 
```

#### Inicie a aplicação

```
$ yarn run dev  
```

## ⚙️ Executando os testes

Para executar os testes apenas rode esse código no terminal: 

```
$ yarn test
```

### 🔧 Instalação Backend

#### Descrição da instalação do front


## 🛠️ Tecnologias utilizadas

* [NodeJS](https://nodejs.org/docs/latest/api/) - Backend
* [Typescript](https://www.typescriptlang.org/docs/) - Linguagem de Programação
* [React](https://react.dev/) - Frontend
* [Express.js](https://expressjs.com/pt-br/) - Framework
* [Docker](https://docs.docker.com/) - Container
* [PostgreSQL](https://www.postgresql.org/docs/) - Banco de dados
* [Vitest](https://vitest.dev/) - Testes

---
⌨️ Feito por [Matheus Santos](https://github.com/matheus-santos-da-silva) 😊