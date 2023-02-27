# Base image
FROM node:16.17.0-bullseye-slim

# Set working directory
WORKDIR /client

# Copy package.json and package-lock.json to working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy all app files to working directory
COPY . .

# Build the app
RUN npm run build

# Expose port 2900
EXPOSE 2900

# Start the app
CMD ["npm", "run", "dev"]
