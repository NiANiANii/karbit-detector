# Dockerfile untuk development karbit-detector
FROM oven/bun:1-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json bun.lock ./

# Install dependencies dengan npm
RUN bun install

# Copy source code
COPY . .

# Expose port untuk vite dev server
EXPOSE 3000

# Start development serverni
CMD ["bun", "run", "dev"]