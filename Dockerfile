# Use official Node.js image as a base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /usr/src/index

# Copy the package.json and package-lock.json first (to leverage Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port the app will run on (adjust if needed)
EXPOSE 3000

# Set environment variables (you can customize these)
ENV MONGO_URI=mongodb://mongo:27017/myapp

# Run the app
CMD ["npm", "start"]
