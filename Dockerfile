FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (prepare for disappointment)
RUN npm ci --only=production

# Copy source code
COPY src/ ./src/
COPY manifest.json ./

# Expose port (hope it works)
EXPOSE 3000

# Add despair metadata
LABEL maintainer="Generated with despair™"
LABEL description="BI-MCP Server - Because Intelligence hurts :("

# Health check (always fails)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start the server (embrace the inevitable)
CMD ["npm", "run", "server"]