#!/bin/bash

# HERO Personal Agent Website - Installation Script
# This script installs all dependencies using pnpm

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing pnpm..."
    npm install -g pnpm
fi

echo "📋 Node.js version: $(node --version)"
echo "📋 pnpm version: $(pnpm --version)"

# Install dependencies
echo "📦 Installing project dependencies..."
pnpm install

