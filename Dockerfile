# Use alpine nodejs
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the files
COPY . .

# Build the app
RUN npm run build

# Expose the server port
EXPOSE 8059

# Pass down the var SERVER_PORT
ENV SERVER_PORT=8059

# Run the app
CMD ["npm", "run", "start-server"]
