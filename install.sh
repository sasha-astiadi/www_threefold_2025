#!/usr/bin/env bash
# ------------------------------------------------------------
# OURWORLD Web – Installation script ( www_threefold_2025 )
# ------------------------------------------------------------

set -e  # abort on any error

echo "🚀 Installing OURWORLD Web (www_threefold_2025)…"
echo "================================================"

# ---------- 1. Verify Node.js ----------
if ! command -v node &>/dev/null; then
    echo "❌ Node.js is not installed. Install it first (https://nodejs.org/)."
    exit 1
fi

# ---------- 2. Verify / install pnpm ----------
if ! command -v pnpm &>/dev/null; then
    echo "📦 pnpm not found – installing globally via npm…"
    npm install -g pnpm
fi

echo "✅ Node version    : $(node --version)"
echo "✅ pnpm version    : $(pnpm --version)"
echo ""

# ---------- 3. Install project deps ----------
echo "📦 Installing project dependencies (lock‑file will be honoured)…"
pnpm install

echo ""
echo "✅ Installation finished!"
echo "------------------------------------------------"
echo "Next steps:"
echo "  1️⃣  Run './start.sh'  – start the dev server"
echo "  2️⃣  Open http://localhost:5173 in your browser"
echo "  3️⃣  Edit files under ./src/ – changes reload automatically"
echo "------------------------------------------------"