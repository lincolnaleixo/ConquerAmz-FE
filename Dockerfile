# Step 1. Create artifact from Vue app
FROM node:lts-alpine as build-stage

# install simple http server for serving static content
#RUN #npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# build app for production with minification
RUN npm run build

#COPY ./entrypoint.sh /entrypoint.sh
#RUN chmod +x /entrypoint.sh
#ENTRYPOINT ["/entrypoint.sh"]

# Step 2. Serve app artifact with nginx
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80

# Step 3. Replace env variables from Docker-compose
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
#RUN source /entrypoint.sh
CMD ["nginx", "-g", "daemon off;"]
#CMD [ "http-server", "dist" ]
