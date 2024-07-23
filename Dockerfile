ARG NODE_VERSION=stable

FROM europe-west1-docker.pkg.dev/connectedcars-build/node-builder/master:$NODE_VERSION as builder

ARG COMMIT_SHA=master

WORKDIR /app

USER builder

# Copy application code.
COPY --chown=builder:builder . /app

RUN npm i
RUN npm run ci-auto
