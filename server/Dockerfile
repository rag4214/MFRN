FROM nginx:alpine

COPY prod/ /etc/nginx/

EXPOSE 80
EXPOSE 443

CMD [ "/bin/sh", "-c", "while :; do sleep 6h; nginx -s reload; done & nginx -g \"daemon off;\"" ]