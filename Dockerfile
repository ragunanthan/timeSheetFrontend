# Use the official Node.js image as base
FROM node:21-alpine

# Set the working directory inside the container
WORKDIR /etc/nginx/sites-enabled/timeSheetFrontend

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code
COPY . .

# Build the application
RUN npm run build

# Expose port (optional, adjust as needed)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "serve"]
