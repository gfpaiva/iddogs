# IDDogs #

[![Build Status](https://travis-ci.org/gfpaiva/iddogs.svg?branch=master)](https://travis-ci.org/gfpaiva/iddogs) [![Coverage Status](https://coveralls.io/repos/github/gfpaiva/iddogs/badge.svg?branch=master)](https://coveralls.io/github/gfpaiva/iddogs?branch=master)

[IDDogs](https://gfpaiva-iddogs.netlify.com/) Uma galeria com fotos de cachorros filtrados pelas raças: husky, labrador, hound e pug.

## ⚙️ Requer

- Node 10.9.0+
- NPM 6.4.1

## 🏃🏽‍♂️ Rodar projeto local

**Instalação**
- `yarn`
- `npm install` ou `npm i`

`npm start` ou `npm start -- --no` e abra `http://localhost:3000/` no seu browser

Npm scripts:

| command              | description                                                                                                                                  |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| npm run start        | inicia servidor local em `localhost:3000`                                                                                                    |
| npm run build:dev    | cria build com arquivos "abertos" em modo de desenvolvimento                                                                                 |
| npm run build:prod   | cria build para produção com arquivos minificatos e otimizados                                                                               |

## ✔️ Checks

- [TravisCI](https://travis-ci.org)
- [Coveralls](https://coveralls.io)

## 🔍 Testes

Feito com [Jest](https://jestjs.io/) e [Enzyme](https://airbnb.io/enzyme/)

Npm scripts:

| command              | description                                        |
| -------------------- | -------------------------------------------------- |
| npm test -- --watch  | roda todos os testes em modo `watch`               |

## 🚀 Deploy

Hospedado no [netlify](https://www.netlify.com/).
Deploy feito pela [CLI do netlify](https://www.netlify.com/docs/cli/) após os checks do TravisCI.

## ⚖️ License

Este projeto está licenciado sob a licença MIT - consulte o arquivo [LICENSE.md](LICENSE.md) para obter detalhes.
