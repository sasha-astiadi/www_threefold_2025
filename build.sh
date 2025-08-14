#!/usr/bin/env bash
# ------------------------------------------------------------
# OURWORLD Web – Production build ( www_threefold_2025 )
# ------------------------------------------------------------

set -e
cd "$(dirname "$0")"   # always run from the script’s directory

# -----------------------------------------------------------------
# 1️⃣  Configuration – adjust these values for your deployment
# -----------------------------------------------------------------
# Folder name that will be used as a URL‑prefix when the site is
# served from a sub‑directory (e.g. https://example.com/threefold/ ).
PREFIX="threefold"               # <--- change if you need a different path

# Remote server where the built files should be copied (optional)
REMOTE_USER="root"
REMOTE_HOST="threefold.info"
REMOTE_PATH="/root/hero/www/info/$PREFIX/"

# -----------------------------------------------------------------
# 2️⃣  Set the Vite base URL (used by the app at runtime)
# -----------------------------------------------------------------
export VITE_APP_BASE_URL="/$PREFIX"
echo "🔧 Setting VITE_APP_BASE_URL to $VITE_APP_BASE_URL"

# -----------------------------------------------------------------
# 3️⃣  Install (exact) dependencies – ensures reproducible builds
# -----------------------------------------------------------------
echo "📦 Installing frozen dependencies…"
pnpm install --frozen-lockfile

# -----------------------------------------------------------------
# 4️⃣  Build the static site
# -----------------------------------------------------------------
echo "🏗️  Running Vite production build…"
pnpm run build   # creates ./dist/

# -----------------------------------------------------------------
# 5️⃣  (Optional) Sync the build locally – useful for quick testing
# -----------------------------------------------------------------
if [ -d "${HOME}/hero/var/www/$PREFIX" ]; then
    echo "🔄 Syncing build to local mirror: ${HOME}/hero/var/www/$PREFIX/"
    rsync -av --delete dist/ "${HOME}/hero/var/www/$PREFIX/"
else
    echo "⚠️  Local mirror folder not found – skipping local rsync"
fi

# -----------------------------------------------------------------
# 6️⃣  (Optional) Deploy to the remote threefold server
# -----------------------------------------------------------------
read -p "🚚 Deploy to remote server (${REMOTE_USER}@${REMOTE_HOST})? [y/N] " -n1 answer
echo
if [[ "$answer" =~ ^[Yy]$ ]]; then
    echo "🔐 Syncing build to remote host…"
    rsync -avz --delete dist/ "${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_PATH}"
    echo "✅ Remote deployment finished."
else
    echo "⏭️  Remote deployment skipped."
fi

echo "🏁 Build script completed."