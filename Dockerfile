FROM node:18-alpine

WORKDIR /app

# Copiar solo los package.json primero (para mejor caching)
COPY backend/package*.json ./back/
COPY frontend/package*.json ./front/

# Instalar dependencias del frontend
WORKDIR /app/frontend
COPY frontend/ .
RUN npm install
RUN npm run build

# Instalar dependencias del backend
WORKDIR /app/backend
COPY backend/ .
RUN npm install
RUN npm run build

# Copiar el build del frontend al backend
RUN cp -r /app/frontend/dist ./public

EXPOSE 3000

# Iniciar la aplicación
CMD ["npm", "run", "start:prod"]