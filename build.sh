#!/bin/bash
cd "$(dirname "$0")"

PREFIX="threefold"

echo "building for folder: /$PREFIX/"
export NEXT_PUBLIC_BASE_PATH="/$PREFIX"

# mkdir -p "out"

# pnpm install --frozen-lockfile
pnpm run build

# local mirror (optional)
# rsync -rav --delete dist/ "${HOME}/hero/var/www/$PREFIX/"

# deploy to threefold server
rsync -avz --delete out/ "root@threefold.info:/root/hero/www/info/$PREFIX/"