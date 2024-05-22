# Dockerfile para el frontend
# Utiliza una versión específica de Node.js como base
FROM node:18

# Crea un directorio de trabajo
WORKDIR /usr/src/app

# Copia el archivo package.json y yarn.lock
COPY package.json yarn.lock ./

# Instala las dependencias
RUN yarn install

# Copia el resto del código de la aplicación
COPY . .

# Compila la aplicación para producción
RUN yarn build

# Utiliza una imagen de nginx alpina para servir los archivos estáticos
FROM nginx:alpine

# Copia los archivos estáticos compilados
COPY --from=0 /usr/src/app/dist/spa /usr/share/nginx/html

# Expone el puerto que usa nginx
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
