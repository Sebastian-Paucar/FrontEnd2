# Etapa 1: Construir la aplicación Angular en modo desarrollo
FROM node:20.11 as Angular
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g @angular/cli
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]