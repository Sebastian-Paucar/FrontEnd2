# Etapa 1: Construir la aplicación Angular
FROM node:20.11 as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build 

# Etapa 2: Utilizar Nginx para servir la aplicación construida
FROM nginx:alpine
COPY --from=builder /app/dist/my-app/browser /usr/share/nginx/html
EXPOSE 80