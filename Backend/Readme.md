# Visão Geral
<p align="justify">
  <a aria-label="Versão do Node" href="https://github.com/nodejs/node/blob/master/doc/changelogs/CHANGELOG_V12.md#12.14.1">
    <img src="https://img.shields.io/badge/node.js@lts-12.14.1-informational?logo=Node.JS"></img>
</a>
  <a aria-label="express" href="https://github.com/expressjs/expresss">
    <img src="https://img.shields.io/badge/Express-4.17.1-informational?logo=expressjs"></img>
  </a>
  <a aria-label="cors" href="https://github.com/expressjs/expresss">
    <img src="https://img.shields.io/badge/Cors-2.8.5-informational?logo=cors"></img>
  </a>
  <a aria-label="SQLite" href="https://github.com/sqlite/sqlite">
    <img src="https://img.shields.io/badge/SQLite3-4.1.1-informational?logo=sql"></img>
  </a>
  <a aria-label="knex" href="https://github.com/Automattic/mongoose/blob/master/History.md#user-content-587--2020-01-10">
    <img src="https://img.shields.io/badge/knex.js-0.20.13-informational?logo=knex"></img>
  </a>
  <a aria-label="Dia 3 de 5" href="https://rocketseat.com.br/week-10/aulas#2">
    <img src="https://img.shields.io/badge/Dia-2-green"></img>
  </a>
</p>

A API do backend é um recurso Node.js-based para comunicar com o DevRadar. Você pode usa-la para acessar data e definir certas propriedades para usuários.  
Esta foi criada para servir à 10ª Semana da Omnistack desenvolvida pela Rocketseat.  
O Backend foi desenvolvido pensando-se no conceito DRY (Don't Repeat Yourself) e arquitetura MVC.

## :computer: Languages

- **Javascript**

## :books: Technologies

- **cors**: ^2.8.5
- **express**: ^4.17.1
- **knex**: ^0.20.13
- **sqlite3**: ^4.1.1

**devDependencies**

- **nodemon**: ^2.0.2


# Especificações
- ## Insomnia (acesso a rotas GET/POST/PUT/DELETE)
	- Baixe e instale o **[Insomnia](https://insomnia.rest/ "Insomnia")** seguindo os passos descritos em seu site.

- ## Protocolo de comunicação:
	O protocolo escolhido para o desenvolvmento do **Backend** foi HTTP.
	### Tipos de requisições HTTP:
	Os métodos abaixo são utilizados quando:

	- **GET**: se deseja BUSCAR uma informação do backend. É sempre requisitado quando se acessa uma rota;
	- **POST**: se deseja CRIAR uma informação no backend;
	- **PUT**: se deseja ALTERAR uma informação do backend;
	- **DELETE** : se deseja DELETAR uma informação do backend.

	###  Tipos de parametros:
	- **Query Params**: Parametros nomeados enviados na rota após "?" geralmente para (filtros, paginação)
		 http://localhost:3333/user?aluno=Carlos
	- **Route Param**s: Parametros utilizados para identificar recursos
		 http://localhost:3333/user/:id = http://localhost:3333/user/1
	- **Request Body**: São utilizados quando se deseja passar muitos parâmetros numa requisição, por exemplo quando se está criando um usuário.

- ## Bancos de Dados
	Existem bancos de dados relacionais (que utilizam linguagem SQL como o MySQL, SQLite, PostgreSQL MS SQL Server) e os não relacionais (Redis, Mongo, Couch), também chamados de NOSQL (Not Only SQL).

	Nesta edição, ao contrario das outras, a rocketseat optou por utilizar os bancos SQL por apresentar uma consistência de dados maior e pela capacidade de criar tabelas bem estruturadas e relacionadas. Se desejar se aprofundar mais nesse assunto, existem vários sites na internet que explicam isso. Você pode começar por [aqui](https://www.devmedia.com.br/conceitos-fundamentais-de-banco-de-dados/1649 "aqui").

	O banco escolhido foi o [SQLite](https://github.com/sqlite/sqlite "SQLite").
	
	E o [KnexJS](http://knexjs.org/ "KnexJS") foi utilizado para fazer a estruturação da tabela, consulta, e gravação de dados no Banco.


# Usar:
  Para instalar as dependências e executar o **Servidor** (modo desenvolvimento), clone o projeto em seu computador e em seguida execute:
  ```bash
    cd Backend
    yarn install
    yarn start
  ```
 # Migrations
- ### Incidents
	Este é o Migration da tabela Incidents

	#### Estrutura
	 - *\BeTheHero\Backend\src\database\migrations\20200324090729_create_incidents.js*

	```js
	exports.up = function(knex) {
	  return knex.schema.createTable('incidents', function (table){
		table.increments();

		table.string('title').notNullable();
		table.string('description').notNullable();
		table.decimal('value').notNullable();

		table.string('ong_id').notNullable();

		table.foreign('ong_id').references('id').inTable('ongs');
	  })
	};

	exports.down = function(knex) {
	  return knex.schema.dropTable('incidents')
	};
	```

- ### Ongs
	Este é o Migration da tabela Ongs

	#### Estrutura
	 - *\BeTheHero\Backend\src\database\migrations\20200324090729_create_ongs.js*

	```js
	exports.up = function(knex) {
	  return knex.schema.createTable('ongs', function (table){
		table.string('id').primary();
		table.string('Name').notNullable();
		table.string('email').notNullable();
		table.string('whatsapp').notNullable();
		table.string('city').notNullable();
		table.string('uf', 2).notNullable();
	  })
	};

	exports.down = function(knex) {
	  return knex.schema.dropTable('ongs')
	};
	```

# Controllers
Aqui estão listados os controles da API do DevRadar, seus métodos, parâmetros e estrutura.

## Devs
Os Devs são os usuários do programa.

| Método       | Estrutura           | Ação                                  | Parâmetros          | Retorno       |
| ------------ | ------------------- | ------------------------------------- | ------------------- | ------------- |
| ![GET][1]    | `/api/listdevs`         | Lista todos os usuários cadastrados   | **Nenhum**          | JSON/Usuários |
| ![POST][2]   | `/api/devs`         | Cadastra um usuário no banco de dados | JSON/git,techs,geo  | JSON/Usuário  |
| ![PUT][3]    | `/api/devs/:github` | Edita dados do usuário                | Rota + JSON/campos  | JSON/Qnt,ok   |
| ![DELETE][4] | `/api/devs/:github` | Deleta um usuário                     | Rota                | 200 OK        |

## Search
Este controlador serve para listar usuários porém em modo de pesquisa.  
Com este módulo é possível procurar por usuários em um raio de **10km** e com techs(Tecnologias) específicas.

| Método       | Estrutura     | Ação              | Parâmetros                     | Retorno       |
| ------------ | ------------- | ----------------- | ------------------------------ | ------------- |
| ![GET][5]    | `/api/search` | Pesquisa usuários | Query/techs,latitude,longitude | JSON/Usuários |


# Exemplos
## Index
```http
GET /api/devs HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
    "devs": [
        {
          "techs": [
            "React",
            "React Native",
            "NodeJS"
          ],
          "_id": "5e1fa978baa16a67e2bfe330",
          "github_username": "solrachix",
          "name": "Carlos Miguel",
          "avatar_url": "https://avatars2.githubusercontent.com/u/57706806?v=4",
          "bio": null,
          "location": {
            "coordinates": [
              -46.9396393,
              -23.3269011
            ],
            "_id": "5e1fa978baa16a67e2bfe331",
            "type": "Point"
          },
          "__v": 0
        },
        ...
    ]
}
```
</details>

------------------------------------------------------------------------------------------------------------------------

## Create
```http
POST /api/devs HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
    "techs": [
        "Java",
        "ReactJS",
        "Node.js"
    ],
    "_id": "5e1dedc2ba895700505a1b5a",
    "github": "MateusAquino",
    "name": "Mateus",
    "avatar_url": "https://avatars1.githubusercontent.com/u/16140783?v=4",
    "bio": "I'm a Student and a Java enthusiast. Started programming around 10 years old.",
    "location": {
        "coordinates": [
            -45.8870291,
            -23.2480525
        ],
        "_id": "5e1dedc2ba895700505a1b5b",
        "type": "Point"
    },
    "__v": 0
}
```
</details>

------------------------------------------------------------------------------------------------------------------------

## Update
```http
PUT /api/devs/MateusAquino HTTP/1.1

{
  "techs": "Java, React, Node.js, CSS",
  "github": "este_campo_nao_deve_fazer_nenhuma_alteracao_no_user"
}
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
    "modifiedCount": 1,
    "ok": 1
}
```
</details>


------------------------------------------------------------------------------------------------------------------------

## Delete
```http
DELETE /api/devs/MateusAquino HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary></details>



------------------------------------------------------------------------------------------------------------------------

## Search
```http
GET /api/search?techs=ReactJS,Node.JS&latitude=-23.2480525&longitude=-45.8870291 HTTP/1.1
```
<details>
<summary><code>HTTP/1.1 200 OK</code></summary>

```json
{
    "devs": [
        {
          "techs": [
              "React",
              "React Native",
              "NodeJS"
            ],
            "_id": "5e1fa978baa16a67e2bfe330",
            "github_username": "solrachix",
            "name": "Carlos Miguel",
            "avatar_url": "https://avatars2.githubusercontent.com/u/57706806?v=4",
            "bio": null,
            "location": {
              "coordinates": [
                -46.9396393,
                -23.3269011
              ],
              "_id": "5e1fa978baa16a67e2bfe331",
              "type": "Point"
            },
            "__v": 0
        },
        ...
    ]
}
```
</details>

[1]: #index
[2]: #create
[3]: #update
[4]: #delete
[5]: #search



## Licença

[MIT](./LICENSE) &copy; [Rocketseat](https://rocketseat.com.br/)
