FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy server files
COPY . .

# Expose port
EXPOSE 5001

CMD ["npm", "start"] 