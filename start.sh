#!/usr/bin/env bash
# ------------------------------------------------------------
# OURWORLD Web – Development server ( www_threefold_2025 )
# ------------------------------------------------------------

set -e

echo "🚀 Starting OURWORLD Web Development Server…"
echo "================================================"

# ---------- 1. Make sure deps are installed ----------
if [ ! -d "node_modules" ]; then
    echo "❌ node_modules missing – run './install.sh' first."
    exit 1
fi

# ---------- 2. Show helpful URLs ----------
echo "🌐 Local URL   : http://localhost:5173"
echo "🌐 Network URL : http://0.0.0.0:5173"
echo ""

# ---------- 3. Tips ----------
cat <<'EOF'
💡 Tips while developing:
   • The server automatically reloads on file changes.
   • Press Ctrl+C to stop the server.
   • Main entry points you’ll edit most often:
        - src/pages/Home.tsx          → home page content
        - src/components/             → reusable components
        - src/styles/tailwind.css     → global styles
        - public/images/              → public images
EOF
echo ""

# ---------- 4. Start Vite (pnpm) ----------
pnpm run dev --host   # --host enables the network URL above