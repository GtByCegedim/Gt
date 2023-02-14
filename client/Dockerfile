# Use an official node image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /client

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's code to the container
COPY . .

# Build the Vue.js app
RUN npm run build

# Expose the app's default port
EXPOSE 8080

# Run the app using the command specified in the package.json file
CMD [ "npm", "start", "dev" ]
