# 🐳 SkyCast Docker Setup

This guide helps you run SkyCast using Docker for both development and production environments.

## 📋 Prerequisites

- [Docker](https://www.docker.com/get-started) (v20.10+)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0+)

## 🚀 Quick Start

### 1. Environment Setup

```bash
# Copy the environment template
cp server/.env.example server/.env

# Edit server/.env and add your API keys:
# OPENWEATHERMAP_API_KEY=your_key_here
# RAPIDAPI_KEY=your_key_here
# WEATHERAPI_KEY=your_key_here
```

### 2. Production Deployment

```bash
# Build and start all services
docker-compose up --build -d

# Or use the deployment script
./deploy.sh        # Linux/Mac
deploy.bat         # Windows
```

**Access your application:**

- 🌐 Frontend: http://localhost:8080
- 🔧 API: http://localhost:3000
- 📊 Health Check: http://localhost:3000/api/health

### 3. Development Mode

```bash
# Start development environment with hot reload
docker-compose -f docker-compose.dev.yml up --build
```

**Development URLs:**

- 🌐 Frontend: http://localhost:5173 (with hot reload)
- 🔧 API: http://localhost:3000 (with auto restart)

## 📊 Docker Commands

### Container Management

```bash
# View running containers
docker-compose ps

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f skycast-server
docker-compose logs -f skycast-client

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### Development Commands

```bash
# Start development environment
docker-compose -f docker-compose.dev.yml up

# Rebuild development containers
docker-compose -f docker-compose.dev.yml up --build

# Stop development environment
docker-compose -f docker-compose.dev.yml down
```

### Maintenance Commands

```bash
# Remove unused containers and images
docker system prune -f

# Remove all SkyCast containers and images
docker-compose down --rmi all

# View container resource usage
docker stats
```

## 🏗️ Architecture

### Production Stack

- **Frontend**: React + Vite → Nginx (Alpine)
- **Backend**: Node.js + Express + TypeScript → Node (Alpine)
- **Network**: Docker bridge network
- **Security**: Non-root users, health checks

### Development Stack

- **Frontend**: Vite dev server with hot reload
- **Backend**: tsx watch with auto restart
- **Volumes**: Bind mounts for live code updates

## 🔧 Configuration

### Environment Variables

- Copy `server/.env.example` to `server/.env`
- Configure your API keys:
  - `OPENWEATHERMAP_API_KEY`
  - `RAPIDAPI_KEY`
  - `WEATHERAPI_KEY`

### Ports

- **Frontend**: 8080 (production), 5173 (development)
- **Backend**: 3000
- **Health Checks**: Built-in monitoring

### Volumes

- Production: No persistent volumes (stateless)
- Development: Code directories mounted for hot reload

## 🚨 Troubleshooting

### Common Issues

1. **Port conflicts**

   ```bash
   # Check what's using the port
   netstat -tulpn | grep :8080

   # Kill the process or change ports in docker-compose.yml
   ```

2. **API keys not working**

   ```bash
   # Check environment variables
   docker-compose exec skycast-server env | grep API

   # Restart services after updating .env
   docker-compose restart
   ```

3. **Build failures**

   ```bash
   # Clean build cache
   docker builder prune -f

   # Rebuild without cache
   docker-compose build --no-cache
   ```

4. **Network issues**
   ```bash
   # Check network connectivity
   docker network ls
   docker network inspect skycast-network
   ```

### Health Checks

```bash
# Check service health
curl http://localhost:3000/api/health
curl http://localhost:8080/health

# View health status
docker-compose ps
```

### Logs and Debugging

```bash
# Follow all logs
docker-compose logs -f

# Debug specific service
docker-compose exec skycast-server sh
docker-compose exec skycast-client sh
```

## 📈 Performance Tips

- Use multi-stage builds (already configured)
- Leverage Docker layer caching
- Use `.dockerignore` files (already configured)
- Run containers as non-root users (already configured)
- Enable gzip compression (configured in nginx)

## 🔒 Security Features

- ✅ Non-root container users
- ✅ Security headers in nginx
- ✅ Health checks for monitoring
- ✅ Minimal base images (Alpine)
- ✅ No secrets in images

## 📦 Production Deployment

For production deployment on cloud platforms:

1. **Build images**

   ```bash
   docker build -t skycast-client ./client
   docker build -t skycast-server ./server
   ```

2. **Tag for registry**

   ```bash
   docker tag skycast-client:latest registry.example.com/skycast-client:latest
   docker tag skycast-server:latest registry.example.com/skycast-server:latest
   ```

3. **Push to registry**
   ```bash
   docker push registry.example.com/skycast-client:latest
   docker push registry.example.com/skycast-server:latest
   ```

## 🛠️ Customization

### Changing Ports

Edit `docker-compose.yml`:

```yaml
services:
  skycast-client:
    ports:
      - "3000:8080" # Change left side to your desired port
```

### Adding SSL

Mount certificates and update nginx configuration:

```yaml
volumes:
  - ./ssl:/etc/nginx/ssl
```

### Database Integration

Add database services to `docker-compose.yml`:

```yaml
services:
  mongodb:
    image: mongo:latest
    volumes:
      - skycast-db:/data/db
```
