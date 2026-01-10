# Imagen base de Node.js
FROM node:20

# Carpeta de trabajo
WORKDIR /usr/src/app

# Copia de archivos de dependencias
COPY package*.json ./
RUN npm install

# Copia de todo el código fuente
COPY . .

# Puertos abiertos (API y Métricas)
EXPOSE 3000 9464

# Comando de inicio
CMD ["npm", "run", "dev"]