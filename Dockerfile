# Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copiar package.json files
COPY package*.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Instalar dependencias del backend
WORKDIR /app/backend
RUN npm install

# Instalar dependencias del frontend y hacer build
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# Copiar el resto de archivos
WORKDIR /app
COPY . .

# Build del backend
WORKDIR /app/backend
RUN npm run build

# Copiar archivos del frontend al backend
RUN cp -r /app/frontend/dist /app/backend/

EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "start:prod"]