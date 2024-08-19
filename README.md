
# Podcast Manager 🎙

## Descrição

Podcast Manager é um aplicativo ao estilo Netflix, que centraliza diferentes episódios de podcasts em vídeo, organizados por categorias. O objetivo é facilitar o acesso e a navegação entre os episódios, permitindo que os usuários descubram novos conteúdos e filtrem episódios por nome de podcast.

## Funcionalidades

- **Listar episódios de podcasts em sessões de categorias**: Os episódios são organizados em categorias como saúde, fitness, mentalidade e humor, proporcionando uma navegação intuitiva.
- **Filtrar episódios por nome de podcast**: Permite buscar e filtrar episódios com base no nome do podcast, tornando a experiência mais personalizada.

## Domínio

Este aplicativo é voltado para podcasts em vídeo, oferecendo uma experiência visual rica e integrada.

## API Endpoints

### 1. Listar Episódios de Podcasts

**GET /episodes**

Retorna uma lista de episódios de podcasts, incluindo o nome do podcast, nome do episódio, imagem de capa, link e categorias.

**Response:**

```json
[
    {
        "podcastName": "Flow",
        "episode": "TECNOLOGIA E IA [+ FABIO AKITA]",
        "videoID": "--slRywdonM&t=219s",
        "categories": [
            "saúde",
            "esporte",
            "bodybuilder"
        ]
    },
    {
        "podcastName": "Flow",
        "episode": "TECNOLOGIA E IA [+ FABIO AKITA]",
        "videoID": "u78AkEhOqmM",
        "categories": [
            "saúde",
            "esporte",
            "bodybuilder"
        ]
    }
]
```

### 2. Filtrar Episódios por Nome de Podcast

**GET /api/podcasts?p={podcastName}**

Retorna uma lista de episódios filtrados com base no nome do podcast fornecido pelo cliente.

## Como Funciona

### Implementação

- **Feature**: Listar os episódios de podcasts em sessões de categorias.
- **Como foi implementado**: Uma API REST que retorna uma lista de episódios de podcasts, incluindo o nome do podcast, episódio, imagem de capa e link do vídeo.

Aqui está a seção de tecnologias utilizadas no seu README, com links em Markdown para cada uma delas:

## 3.Tecnologias Utilizadas

- [Node.js](https://nodejs.org) - Plataforma de execução de código JavaScript no servidor.
- [TypeScript](https://www.typescriptlang.org) - Superset do JavaScript que adiciona tipagem estática opcional.
- [TSX](https://github.com/esbuild-kit/tsx) - Executor de arquivos TypeScript sem necessidade de compilação prévia.
- [Tsup](https://tsup.egoist.dev) - Empacotador de código para projetos TypeScript.
- [@types/node](https://www.npmjs.com/package/@types/node) - Tipos TypeScript para a API Node.js.



## Como Rodar o Projeto

1. Clone o repositório.
2. Instale as dependências usando `npm install` ou `yarn install`.
3. Inicie o servidor com `npm run start:dev `.
4. Acesse os endpoints via Postman ou outro cliente HTTP para testar as funcionalidades.

## Contribuição

Sinta-se à vontade para abrir issues e enviar pull requests para novas funcionalidades ou correções de bugs.

-
