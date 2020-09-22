# Build angular project
FROM node:alpine AS portfoilo-app
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Copy to nginx
FROM nginx:alpine
COPY --from=portfoilo-app /app/dist/portfolio /usr/share/nginx/html
EXPOSE 80