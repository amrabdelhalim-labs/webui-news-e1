# Docker preview

This image serves the repository's static multi-page site with NGINX and has no
runtime dependencies.

```sh
docker pull ghcr.io/amrabdelhalim-labs/webui-news-e1:v1.0.0
docker run --rm -p 8080:80 ghcr.io/amrabdelhalim-labs/webui-news-e1:v1.0.0
```

Open `http://localhost:8080`.
