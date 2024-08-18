# Podcast Maneger

### Descrição
Um app ao estilo netflix, aonde posso centralizar diferentes, episódio  podcast separados  por categoria

### Domínio
Podcasts  feitos em video.

### Funcionalidade
 - Listar os episodios podcast em sessões de categorias
   -[saúde,fitness,mentalidade,humor]
- Filtrar episódios por nome de podcast

## Como

#### Feature:
    Listar os episódios  podcasts em sessões de categorias

### Como vou implementar:
    Vou retornar em uma api rest o nome do podcast, nome do episódio, imagem de capa, link

    GET: retornar uma lista  de episódios

response:
```js
    {
        "podcastName":"flow",
        "episode":"TECNOLOGIA E IA [+ FABIO AKITA]",
        "videoID":"--slRywdonM&t=219s",
        "categories":[
            "saúde",
            "esporte",
            "bodybuilder"
        ] 
    },
     {
        "podcastName":"flow",
        "episode":"TECNOLOGIA E IA [+ FABIO AKITA]",
        "videoID":"u78AkEhOqmM",
        "categories":[
            "saúde",
            "esporte",
            "bodybuilder"
        ] 
    }
```

GET: retorna lista de episódios baseados em um parâmetro enviado pelo cliente  do nome do podcast



