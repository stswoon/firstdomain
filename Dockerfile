FROM nginx:1.27.3

COPY ads.txt ./usr/share/nginx/html

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
COPY start.sh /etc/nginx/
RUN chmod +x /etc/nginx/start.sh
ARG NGINX_PORT
EXPOSE $NGINX_PORT
CMD "/etc/nginx/start.sh"