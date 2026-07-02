# Multi-stage build voor Angular Sport Analytics

# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Kopieer package files
COPY package*.json ./

# Installeer dependencies
RUN npm ci

# Kopieer source code
COPY . .

# Build Angular app
RUN npm run build

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

# Installeer http-server voor serving van static files
RUN npm install -g http-server

# Kopieer gebouwde app van builder stage
COPY --from=builder /app/dist/sport-analytics /app/public

# Expose poort
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080 || exit 1

# Start server
CMD ["http-server", "public", "-p", "8080", "-g"]
