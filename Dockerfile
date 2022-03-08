ARG NODE_VERSION=14.x

FROM gcr.io/connectedcars-staging/node-builder.master:$NODE_VERSION as builder

ARG SSH_KEY_PASSWORD
ARG NPM_TOKEN
ARG COMMIT_SHA=master

WORKDIR /app

RUN apt-get update

USER builder

# Copy application code.
COPY --chown=builder:builder . /app

RUN npm i

# Run ci checks
RUN npm run ci-audit

RUN npm run ci-mocha

RUN npm run ci-eslint

RUN npm test