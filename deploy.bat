@echo off
REM SkyCast Docker Deployment Script for Windows
REM This script builds and runs the SkyCast application in production mode

echo 🚀 Starting SkyCast Docker Deployment...

REM Check if .env file exists
if not exist "server\.env" (
    echo ⚠️  Warning: server\.env file not found!
    echo 📝 Please copy server\.env.example to server\.env and configure your API keys
    echo cp server\.env.example server\.env
    set /p continue="Continue anyway? (y/N) "
    if /i not "%continue%"=="y" exit /b 1
)

REM Stop any running containers
echo 🛑 Stopping existing containers...
docker-compose down --remove-orphans 2>nul

REM Remove old images (optional)
echo 🗑️  Cleaning up old images...
docker system prune -f

REM Build and start services
echo 🏗️  Building and starting SkyCast services...
docker-compose up --build -d

REM Show running containers
echo 📊 Container Status:
docker-compose ps

REM Show logs
echo 📋 Recent logs:
docker-compose logs --tail=20

echo ✅ SkyCast deployment complete!
echo 🌐 Frontend: http://localhost:8080
echo 🔧 API: http://localhost:3000
echo.
echo 📊 To view logs: docker-compose logs -f
echo 🛑 To stop: docker-compose down

pause