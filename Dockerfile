# Base image
FROM node:10

# Maintainer name
LABEL maintainer="rearView.io"

# Copying angular folder from local directory to Educative directory
COPY BillingPro /usr/local/educative/angular

# Installing Angular cli and node modules in angular directory
RUN     npm install -g @angular/cli &&\
        cd /usr/local/educative/angular &&\
        npm i

EXPOSE 3000