FROM ruby:2.6.5-alpine

ARG BUNDLER_VERSION
ARG NODE_VERSION

# Install system dependencies
RUN apk --update add less bash git curl wget build-base && \
    apk add postgresql-dev && \
    apk add curl-dev && \
    apk add tzdata && \
    apk add geos geos-dev && \
    apk add postgresql-client && \
    apk add nodejs && \
    apk add vim imagemagick && \
    apk add vim exiftool && \
    rm -rf /tmp/* /var/tmp/* && \
    truncate -s 0 /var/log/*log

ENV LANG=C.UTF-8

ENV NVM_DIR /root/.nvm
RUN touch /root/.bashrc
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.38.0/install.sh | bash

RUN /bin/bash -c "source $NVM_DIR/nvm.sh && nvm install $NODE_VERSION"

ENV NODE_PATH $NVM_DIR/versions/node/$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/$NODE_VERSION/bin:$PATH

# Configure bundler
#   https://bundler.io/v2.1/guides/bundler_docker_guide.html
ENV GEM_HOME=/bundle
ENV PATH /app/bin:$GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

# Upgrade RubyGems and install required Bundler version
RUN gem update --system && \
    gem install bundler:$BUNDLER_VERSION

# Create a directory for the app code
RUN mkdir -p /app

WORKDIR /app
