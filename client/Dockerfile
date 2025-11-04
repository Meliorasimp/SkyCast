# Use Node.js 20 Alpine as base image
FROM node:20-alpine AS base

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm ci

# Development stage
FROM base AS development
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM base AS build
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Create non-root user for security
RUN addgroup -g 1001 -S nginx-group && \
    adduser -S skycast -u 1001 -G nginx-group

# Copy built application from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Change ownership of nginx files
RUN chown -R skycast:nginx-group /usr/share/nginx/html && \
    chown -R skycast:nginx-group /var/cache/nginx && \
    chown -R skycast:nginx-group /var/log/nginx && \
    chown -R skycast:nginx-group /etc/nginx/conf.d

# Create nginx pid directory
RUN mkdir -p /var/run/nginx && \
    chown -R skycast:nginx-group /var/run/nginx

# Switch to non-root user
USER skycast

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]