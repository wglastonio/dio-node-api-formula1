# API Formula 1

API REST desenvolvida em Node.js e TypeScript para consultar informações básicas sobre equipes e pilotos da Fórmula 1.

Este projeto foi construído por mim como projeto final. A estrutura inicial foi baseada no [Node Blue Boilerplate](https://github.com/felipeAguiarCode/node-blue-boilerplate), de Felipe Aguiar, utilizado como template de configuração para Node.js e TypeScript. A lógica, os dados e as rotas desta API foram desenvolvidos especificamente para este projeto.

## Tecnologias

- Node.js
- TypeScript
- Fastify
- tsx
- tsup

## Funcionalidades

- Listagem de equipes da Fórmula 1
- Consulta de uma equipe por ID
- Listagem de pilotos
- Consulta de um piloto por ID
- Respostas em JSON
- Retorno HTTP `404` para equipes ou pilotos inexistentes

## Rotas

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/teams` | Lista todas as equipes |
| `GET` | `/teams/:id` | Consulta uma equipe pelo ID |
| `GET` | `/drivers` | Lista todos os pilotos |
| `GET` | `/drivers/:id` | Consulta um piloto pelo ID |

Os dados são mantidos em memória e incluem, inicialmente, Mercedes, Red Bull Racing e Ferrari, além de seus respectivos pilotos cadastrados no arquivo `src/server.ts`.

## Como executar

### Pré-requisitos

- Node.js 20 ou superior
- npm 10 ou superior

### Instalação

```bash
npm install
```

### Desenvolvimento

Inicie a API com:

```bash
npm run start:dev
```

O servidor ficará disponível em `http://localhost:3000`.

Para executar com recarregamento automático durante o desenvolvimento:

```bash
npm run start:watch
```

### Build

Para gerar a versão compilada:

```bash
npm run dist
```

## Estrutura principal

```text
src/
└── server.ts    # Configuração do Fastify, dados e rotas da API
```

## Autoria e referência

- **Projeto e implementação:** desenvolvido por mim.
- **Template de configuração:** [Node Blue Boilerplate](https://github.com/felipeAguiarCode/node-blue-boilerplate), de [Felipe Aguiar](https://github.com/felipeAguiarCode).
