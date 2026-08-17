#!/usr/bin/env bash
# deploy.sh — build del portfolio (React/Vite) y push al LXC de Debian (nginx/Arcane)
# Uso: ./deploy.sh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_DIR="$ROOT_DIR/app"
BUILD_DIR="$ROOT_DIR/html"
REMOTE="root@192.168.1.131"
REMOTE_HTML="/etc/arcane/projects/portfolio/html"
SITE_URL="http://192.168.1.131:8080/"

echo "→ Build (npm run build)..."
cd "$APP_DIR"
npm run build

echo "→ Limpiando assets remotos..."
ssh "$REMOTE" "rm -rf $REMOTE_HTML/assets && mkdir -p $REMOTE_HTML/assets"

echo "→ Copiando build a $REMOTE:$REMOTE_HTML ..."
scp -r "$BUILD_DIR/." "$REMOTE:$REMOTE_HTML/"

echo "→ Ajustando permisos y limpiando huérfanos..."
ssh "$REMOTE" "rm -f $REMOTE_HTML/styles.css; chown -R 65532:65532 $REMOTE_HTML"

echo "→ Verificando sitio..."
curl -sf -o /dev/null -w "HTTP %{http_code} — $SITE_URL\n" "$SITE_URL"

echo "✓ Desplegado correctamente"
