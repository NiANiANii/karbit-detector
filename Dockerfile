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

# Expose port untuk web server
EXPOSE 3000

# Serve static files menggunakan bun's built-in server
CMD ["bun", "x", "serve", "-s", "dist", "-l", "3000"]