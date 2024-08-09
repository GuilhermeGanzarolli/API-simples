# Nome do Aplicativo

### Descrição
Um app ao estilo netflix onde eu possa centralizar diferentes podcasts
separados por categorias

### Domínio
Podcasts feitos em vídeos

### Features
- Listar os episódios podcasts em sessões de categorias
 - [saúde, fitness, mentalidade, humor]
- Filtrar epsódios por nome de podcasts

## Como

### Feature:
 Listar os episódios podcasts em sessões de categorias

### Como vou implementar
Vou retornar em uma api rest (json) o
nome do podcast, nome do episódio, imagem de capa, link e categoria
```js
[
{
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    image: "linkDaimagem",
    link: "linkDoEpisódio",
    category: ["saúde", "fitness"]
},
{
    podcastName: "flow outro",
    episode: "outro - Flow #102",
    image: "linkDaimagem",
    link: "linkDoEpisódio",
    category: ["outro", "fitness"]
}
]
```