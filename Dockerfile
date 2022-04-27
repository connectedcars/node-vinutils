ARG NODE_VERSION=16.x

FROM gcr.io/connectedcars-staging/node-builder.master:$NODE_VERSION as builder

ARG COMMIT_SHA=master

WORKDIR /app

USER builder

# Copy application code.
COPY --chown=builder:builder . /app

RUN npm i

# Run ci checks
RUN npm run ci-audit

RUN npm run ci-mocha

RUN npm run ci-eslint