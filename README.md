This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Usar o Prisma apos o clone

1: Criar o arquivo .env (na pasta raiz, a mesma pasta em que o gitignore esta);
2-Adicione a variável , no arquivo .env: DATABASE_URL="file:./dev.db"
3- npx prisma migrate dev --name init 
4- npx prisma generate 
5- npx prisma studio