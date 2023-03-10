### Anime api

- This is just an anime api server, just finding the anime and sending it info and streaming links.
- You can copy the repo or just take it if you want.

### How to install this api to my local system.

- You can just fork this repo and use it on your own. Or you can just clone it.
- After cloning it use the **yarn** or **npm** to install all the packages.
- Then just run it. It will run on the `localhost:3000`.

#### How to use the api?

##### Search Anime

- For searching the anime you can send request to the `${your_URL}/anime/search/${anime name}`.
- The default query is `page: 1` you can change it to however you want.
- The result is gonna look like this

```json
{
  "currentPage": 0,
  "hasNextPage": true,
  "results": [
    {
      "id": "string",
      "title": "string",
      "image": "string",
      "releaseDate": "string", // or null
      "subOrDub": "sub" // or "dub"
    }
  ]
}
```

- This is the result json gonna be look like, You can use however you want.

##### Get Recent Episodes

- For getting the recents episodes send request to the `${your_URL}/anime/recent-episodes`.
- Here are the two queries
  - The `page` query: Which just the result page number is asking.
  - The `type` query:
    - `type : 1`: It shows the result of Japanese Dub and English Sub
    - `type : 2`: It shows the result of Engligh Dub and No Sub
    - `type : 3`: It shows the result of Chinese Dub and Engligh Sub
- The result json is gonna look lik this

```json
{
  "currentPage": 0,
  "hasNextPage": true,
  "results": [
    {
      "id": "string",
      "episodeId": "string",
      "episodeNumber": 0,
      "title": "string",
      "image": "string",
      "url": "string"
    }
  ]
}
```

##### Get Top Airing Anime

- For getting the top airing anime send request to the `${your_URL}/anime/top-airing`.
- Here we have only one param, the `page`, which is default to `1`.
- The result json is gonna look like this

```json
{
  "currentPage": 0,
  "hasNextPage": true,
  "results": [
    {
      "id": "string",
      "title": "string",
      "image": "string",
      "url": "string",
      "genres": ["string"]
    }
  ]
}
```

##### Get Anime Info

- For getting the anime info send request to the `${your_URL}/anime/info/${anime name}`.
- here we have no params. You don't have to worry about it.
- The result json is gonna look like this

```json
{
  "id": "string",
  "title": "string",
  "url": "string",
  "image": "string",
  "releaseDate": "string", // or null
  "description": "string", // or null
  "genres": ["string"],
  "subOrDub": "sub",
  "type": "string", // or null
  "status": "Ongoing",
  "otherName": "string", // or null
  "totalEpisodes": 0,
  "episodes": [
    {
      "id": "string",
      "number": 0,
      "url": "string"
    }
  ]
}
```

##### Get Anime Episode Streaming Links

- For getting episodes streaming likes send request to the `${your_URL}/anime/watch/${episode id}`.
- Here we have a param, `server`, by default the server is gonna be `vidstreaming`.
  - we have other two alternatives `gogocdn` and `streamsb`.
- The result json is gonna look like this

```json
{
  "headers": {
    "Referer": "string",
    "watchsb": "string", // or null, since only provided with server being equal to "streamsb".
    "User-Agent": "string" // or null
  },
  "sources": [
    {
      "url": "string",
      "quality": "string",
      "isM3U8": true
    }
  ]
}
```

##### Get Anime Episode Available Servers

- For getting anime episode available servers send request to the `${your_URL}/anime/servers/${episodeId}`.
- Here we have no params, So no worry. :)
- The reuslt json is gonna look like this

```json
[
  {
    "name": "string",
    "url": "string"
  }
]
```

---

- This whole api is focused on the gogoanime api links. And create with reference to the [Consumet.org](https://docs.consumet.org).
- This is just for a fun purpose, no hard feeling.
