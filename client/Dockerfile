# Base image
FROM node:16.17.0-bullseye-slim

# Set the working directory
WORKDIR /client

# Copy package.json and package-lock.json
COPY package*.json /client/

# Install dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Build the application
RUN npm run build


# Expose the server port
EXPOSE 8080

# Start the server
CMD [ "npm", "run", "serve" ]
