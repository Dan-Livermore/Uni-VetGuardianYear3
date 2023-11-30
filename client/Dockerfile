# Use Node.js version 14 as base image
FROM node:18.18.2 as build

# Set the working directory in the container
WORKDIR /client

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application directory into the container
COPY . .

# Build the React app
RUN npm run build

# Expose a port (optional - only if you want to run the container without Docker Compose)
EXPOSE 3000

# Define the command to start the application (change this based on your setup)
CMD ["npm", "start"]
