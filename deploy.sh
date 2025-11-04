#!/bin/bash

# SkyCast Docker Deployment Script
# This script builds and runs the SkyCast application in production mode

set -e

echo "🚀 Starting SkyCast Docker Deployment..."

# Check if .env file exists
if [ ! -f "./server/.env" ]; then
    echo "⚠️  Warning: server/.env file not found!"
    echo "📝 Please copy server/.env.example to server/.env and configure your API keys"
    echo "cp server/.env.example server/.env"
    read -p "Continue anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Stop any running containers
echo "🛑 Stopping existing containers..."
docker-compose down --remove-orphans 2>/dev/null || true

# Remove old images (optional, comment out if you want to keep them)
echo "🗑️  Cleaning up old images..."
docker system prune -f

# Build and start services
echo "🏗️  Building and starting SkyCast services..."
docker-compose up --build -d

# Show running containers
echo "📊 Container Status:"
docker-compose ps

# Show logs
echo "📋 Recent logs:"
docker-compose logs --tail=20

echo "✅ SkyCast deployment complete!"
echo "🌐 Frontend: http://localhost:8080"
echo "🔧 API: http://localhost:3000"
echo ""
echo "📊 To view logs: docker-compose logs -f"
echo "🛑 To stop: docker-compose down"