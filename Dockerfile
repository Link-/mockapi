FROM node:10

# App directory
WORKDIR /app

# Copy source code
COPY ./src ./

EXPOSE 3005
CMD ["node", "/app/bin/www"]