`README.md` 

---

````markdown
# MongoDB + Mongo Express + Node.js Form App

This project contains a Docker-based setup for MongoDB, Mongo Express, and a simple Node.js app with a static HTML form. The form lets users submit data, which is saved into MongoDB and viewable in the Mongo Express GUI.

---

## 🚀 How to Run

### 1. Start MongoDB & Mongo Express

Run this in your terminal:

```bash
docker compose -f mogodb.yaml up -d
````

This will:

* Run MongoDB on port `27017`
* Run Mongo Express on port `8081`
* Use local volume `/Users/sachin/Desktop/Pratice/data/` to persist MongoDB data

---

## 🧱 `mogodb.yaml` (Docker Compose File)

```yaml
services:
  mongo:
    image: mongo
    ports: 
      - 27017:27017
    environment: 
      MONGO_INITDB_ROOT_USERNAME: admin 
      MONGO_INITDB_ROOT_PASSWORD: sachin
    volumes:
      - /Users/sachin/Desktop/Pratice/data/:/data/db

  mongo-express:
    image: mongo-express
    ports:
      - 8081:8081  
    environment:
      ME_CONFIG_MONGODB_ADMINUSERNAME: admin 
      ME_CONFIG_MONGODB_ADMINPASSWORD: sachin
      ME_CONFIG_MONGODB_URL: mongodb://admin:sachin@mongo:27017/
```

---

## 🐳 Dockerfile

```Dockerfile
FROM node

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PASSWORD=sachin

RUN mkdir -p testapp

COPY . /testapp  

CMD [ "node", "/testapp/index.js" ]
```

---

## 🔨 Build and Run Node.js App

### Build Docker Image

```bash
docker build -t testapp:1.0 .
```

### Run Container from Image

```bash
docker run -it testapp:1.0 bash
```

---

## 🧪 Features

* MongoDB for storing form data
* Mongo Express UI at `http://localhost:8081`
* Static HTML form to
