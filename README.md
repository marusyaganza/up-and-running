## Required Software

- **Volta**: A JavaScript tool manager that ensures consistent project tooling.
- **Docker**: A platform for developing, shipping, and running applications in containers.

## How to Start the Project

### Locally

1. Run `docker-compose up` to start the project with the temporary database.
2. Open `http://localhost:5000` in your browser to access the application.
3. Open `http://localhost:4000` to work with the Apollo GraphQL playground.

This project uses Star Wars API [docs](https://swapi.info/)

### Run DB for local development

`docker run --name up-db -d -v data:/data/up-db -p 27017:27017 mongo:4`

### Run test DB

`docker run --name test-db --rm -d -v /data/test-db -p 27017:27017 mongo:4`