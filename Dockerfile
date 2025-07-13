# docker build . -t first-domain:v1
# docker run --rm --name first-domain -p 8085:8085 -e NGINX_PORT=8085 first-domain:v1

FROM node:22.11.0 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY public ./public
COPY index.html tsconfig.app.json tsconfig.json tsconfig.node.json vite.config.ts ./
RUN npm run build

FROM nginx:1.27.3
COPY --from=builder /app/dist ./usr/share/nginx/html
COPY ads.txt ./usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
COPY start.sh /etc/nginx/
RUN chmod +x /etc/nginx/start.sh
ARG NGINX_PORT
EXPOSE $NGINX_PORT
CMD ["/etc/nginx/start.sh"]