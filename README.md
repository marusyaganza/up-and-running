This project uses Star Wars API [docs](https://swapi.info/)

### Run DB for local development

`docker run --name up-db -d -v data:/data/up-db -p 27017:27017 mongo:4`

### Run test DB

`docker run --name test-db --rm -d -v /data/test-db -p 27017:27017 mongo:4`