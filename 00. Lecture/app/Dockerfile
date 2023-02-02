FROM node:current-slim

LABEL MAINTAINER=Jordan

# Copy source code to /src in container
COPY . /src

# Install app and dependencies into /src in container
RUN cd /src; npm install

# Document the port the app listens on
EXPOSE 3001

# Run this command (starts the app) when the container starts
CMD cd /src && node ./app.js