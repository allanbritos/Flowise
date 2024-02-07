#!/usr/bin/env bash

DIR="/app/"
touch $DIR/heartbeat.txt
mkdir -p $DIR/logs
NODE_TLS_REJECT_UNAUTHORIZED=0 NO_PROXY=localhost,127.0.0.1,chroma-db,kafka-connector,$NO_PROXY HTTPS_PROXY=$HTTPS_PROXY HTTP_PROXY=$HTTP_PROXY NODE_ENV=local node --use_strict --throw-deprecation --trace-deprecation \
  $DIR/packages/server/bin/run start