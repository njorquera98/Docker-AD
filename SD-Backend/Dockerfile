# Dockerfile para el backend

# Utiliza una imagen de Node.js como base
FROM node:18

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install

# Instala Nest.js globalmente
RUN yarn global add @nestjs/cli

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación (si es necesario)
# RUN yarn build

# Expone el puerto que usa la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start"]
