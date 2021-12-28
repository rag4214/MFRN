# MFRN

Hello! This is a MFRN template for people who want to self host. This was created for the sole reason that when working on MFRN projects I always ended up repeating the same boilerplate steps.

This template comes with the following features:

- [Mongoose](https://mongoosejs.com/) [MongoDB](https://www.mongodb.com/) database
- [GraphQL](https://graphql.org/) [Fastify](https://www.fastify.io/) backend
- [Next.js](https://nextjs.org/) [React](https://reactjs.org/) fontend
- [TypeScript](https://www.typescriptlang.org/) [Node.js](https://nodejs.org/en/) runtime
- [nginx](https://nginx.org/) HTTP/2 web server
- [Certbot](https://certbot.eff.org/) & [Let's Encrypt](https://letsencrypt.org/) HTTPS certificates
- [GitHub Actions](https://github.com/features/actions) automatic actions for pushes / pull requests to main branch
    - [CodeQL Analysis](https://codeql.github.com/docs/)
    - Status Checks
        - Lint
        - Build
- [Dependabot](https://dependabot.com/) automatic dependency updates

## Requirements

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Usage

1. ### Setup

    1. Open `server/prod/nginx.conf` and replace all **11** instances of `example.com` with your domain (lines `78`, `81 - 83`, `107`, `110 - 112`, `114`, `121`, `127`)
    1. Start the application by running `docker-compose up --build -d`

    1. Run:

        ```sh
        docker-compose run --rm --entrypoint "certbot certonly --agree-tos --webroot --webroot-path /var/www/certbot/ -d example.com -d www.example.com" certbot
                                                                                                                         ^^^^^^^^^^^        ^^^^^^^^^^^
        ``` 
        making sure to remplace `example.com` with your domain

        1. Continue with the Certbot CLI by inputting your email address and agreeing to share your email with the EEF

    1. Open `server/prod/nginx.conf` and uncomment the two `server` blocks (lines `75 - 115`)
    1. Stop the application by running `docker-compose down`
    1. Rebuild the application by running `docker-compose build`

1. ### Starting

    The application can be started with:

    ```sh
    docker-compose up -d
    ```

    It will be accessible at `https://www.[yourdomain]`

## Development

1. ### Installation

    - [app](./app/README.md#installation)
    - [api](./api/README.md#installation)

2. ### Starting

    Run:
    ```sh
    docker-compose -f compose.dev.yaml up --build
    ```

    The application will be accessible at [http://localhost](http://localhost)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
