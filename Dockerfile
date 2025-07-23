# syntax=docker/dockerfile:1
FROM node:20-bookworm-slim

# Install Python + pip
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3 python3-pip \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install Node deps first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Python deps (replace with pypdf if you prefer)
COPY requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

# App source
COPY . .

# Ensure script is executable
RUN chmod +x start.sh

# Render sets $PORT; just expose it for local runs
EXPOSE 10000

CMD ["bash", "start.sh"]
