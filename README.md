# *Em Construção...* ⏱

# Boundary Value Analysis (BVA)
Projeto que ilustra uma das Técnicas de Testes de Software chamada Boundary Value Analysis (BVA), ou Análise de Valor Limite.

## Tecnologias

- Javascript
- Vitest (para os testes unitários)
- Node.js


## Conceitos abordados

O foco fica realmente na Técnica de Testes chamada BVA, onde basicamente testamos todos os valores limites dentro de uma determinada range, aplicando algumas regras para isso.

## Como rodar o projeto

Após clonar o projeto, rodar o comando ***npm i*** via terminal já na pasta do projeto para criar a pasta ***node_modules*** com as dependências do projeto.

### Rodar o módulo BVA (index.js)

Via terminal, rodar o comando ***node index.js***

### Rodar o módulo de testes (index.text.js)

Via terminal, rodar o comando ***vitest --run --reporter verbose*** (Obs. necessária instalação do framework *Vitest* para execução dos testes, passo a passo para a instalação [aqui](https://vitest.dev/guide/)

### Observações

- Testes untários ainda em implementação.
- Lógica que continha o código para a entrada de dados do usuário foi substituída por dados fixos até eu encontrar alguma forma de ler os dados do usuário além da biblioteca readline-sync kkkkk
