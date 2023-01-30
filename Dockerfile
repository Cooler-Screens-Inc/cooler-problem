FROM node:16-alpine

# Everything goes into this directory
WORKDIR /app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Using port 4000
EXPOSE 4000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD [ "npm", "run", "healthcheck" ]

# Run the app
CMD ["npm", "run", "start"]
