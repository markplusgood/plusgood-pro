# Minimalist CV [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmarkplusgood%2Fplusgood.pro)

Simple web app that renders minimalist CV with print-friendly layout.

Built with Next.js and shadcn/ui, deployed on Vercel.

![screenshot](https://raw.githubusercontent.com/markplusgood/plusgood-pro/refs/heads/main/public/web_page.png)

## Features

- Setup only takes a few minutes [single config file](./src/data/resume-data.tsx)
- Built using Next.js 14, React, Typescript, Shadcn/ui, TailwindCss
- Auto generated Layout
- Responsive for different devices
- Optimized for Next.js and Vercel

## Getting Started Locally

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/markplusgood/plusgood.pro.git
   ```

2. Move to the cloned directory

   ```shell
   cd cv
   ```

3. Install dependencies:

   ```shell
   yarn install
   ```

4. Start the local Server:

   ```shell
   yarn dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes

## Run with Docker

Build the container

```shell
docker compose build
```

Run the container

```shell
docker compose up -d
```

Stop the Container

```shell
docker compose down 
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
