FROM node:16.17.0-bullseye-slim
WORKDIR /server/
COPY ./package.json /server/
RUN npm install
COPY . .

# Set the environment variable for the Node environment
ENV NODE_ENV dev

# Define the command to run the application
CMD [ "npm", "run", "start:dev" ]
