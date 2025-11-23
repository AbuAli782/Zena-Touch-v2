#!/bin/bash

# Professional Media Compression Setup Script
# This script installs all required dependencies and runs compression

echo "🚀 Setting up Professional Media Compression..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js is installed: $(node --version)"
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "⚠️  FFmpeg is not installed. Installing ffmpeg-static..."
else
    echo "✅ FFmpeg is installed: $(ffmpeg -version | head -n 1)"
fi

echo ""
echo "📦 Installing required npm packages..."
echo ""

# Install required packages
npm install --save-dev \
    sharp \
    imagemin \
    imagemin-mozjpeg \
    imagemin-pngquant \
    imagemin-webp \
    fluent-ffmpeg \
    ffmpeg-static

echo ""
echo "✅ Installation completed!"
echo ""
echo "🎬 Running media compression..."
echo ""

# Run compression script
node compress-media.js

echo ""
echo "✅ Setup and compression completed!"
echo ""
echo "📝 Next steps:"
echo "1. Review the compression report above"
echo "2. Update your HTML to use optimized images"
echo "3. Test the website performance"
echo ""
