FROM node:15-stretch

RUN mkdir -p /home/node/.vscode-server/extensions && \
    chown -R node /home/node/.vscode-server
USER node
