Momentable webapp based on NextJS, you can find the packages used on this project in `package.json`

## Getting Started

#### Requirements:

-   [Docker](https://www.docker.com/)

#### Getting your local environment set up

First, you will need the server repo cloned on your device.

Clone the repo:

```bash
git clone "repourl"
```

Then you will need to install `composer` on your machine:

##### MacOS

`brew install composer`

##### Windows

[Here are the steps](https://getcomposer.org/download/)

You will also need Sail installed

`php artisan sail:install`

Once that command runs successfully, you will be able to launch a [Docker](https://www.docker.com/) using

`./vendor/bin/sail up`

app.exibyt.xyz

## Automated Testing using Cypress

`npm run cypress` will start the interface and through it, you can use Electron to run/monitor the tests.
You will need to update the URLs to the client and the server.

You can update `cypress.config.ts` to target staging environment applications.
# formup
