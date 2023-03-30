## Teslo Shop

Fullstack application made with Next 13, Docker and MongoDB.

# Setup

1. Install and run Docker
2. Install and run Mongo Compass

3. Generate the database

```
docker-compose up -d
```

4. Rename .env.example file to .env

5. Install dependencies and run the app

```
pnpm install
pnpm run dev
```

6. Call the next endpoint

```
http://localhost:3000/api/seed
```
