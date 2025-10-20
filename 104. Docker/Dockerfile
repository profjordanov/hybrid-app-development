FROM node:current-slim

LABEL MAINTAINER=Jordan

# Copy source code to /src in container
COPY . /src

# Run this command (starts the app) when the container starts
CMD cd /src && node ./index.js
