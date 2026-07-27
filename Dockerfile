FROM alpine:3.21 AS content
WORKDIR /site
COPY . .

FROM nginx:1.30-alpine
COPY --from=content /site /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
