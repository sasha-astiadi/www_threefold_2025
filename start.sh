#!/bin/bash

# HERO Personal Agent Website - Development Server
# This script starts the development server with hot reload

echo "🚀 Starting HERO Personal Agent Website Development Server..."
echo "============================================================="

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "❌ Dependencies not installed. Please run './install.sh' first."
    exit 1
fi

# Start the development server
pnpm run dev -p 3010

