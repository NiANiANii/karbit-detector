# Multi-stage build untuk production karbit-detector
FROM oven/bun:1-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies (production + dev untuk build)
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build production assets
RUN bun run build

# Production stage - minimal image dengan static files
FROM oven/bun:1-alpine

WORKDIR /app

# Copy built assets dari builder stage
COPY --from=builder /app/dist ./dist

# Tidak perlu expose port karena nginx-service yang handle
# Hanya simpan static files untuk di-serve nginx

CMD ["echo", "Static files ready in /app/dist"]