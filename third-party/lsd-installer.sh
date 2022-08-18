#!/bin/bash

JSON_PATH="$(mktemp --suffix=json)"

curl -q --no-progress-meter 'https://api.github.com/repos/Peltoche/lsd/releases/latest' > "$JSON_PATH"

DOWNLOAD_URL="$(jq -r '.assets[] | select(.name | test("lsd-musl_.*_amd64.deb")).browser_download_url' < "$JSON_PATH")"
DEB_NAME="$(jq -r '.assets[] | select(.name | test("lsd-musl_.*_amd64.deb")).name' < "$JSON_PATH")"

curl -q --no-progress-meter -L "$DOWNLOAD_URL" -o "/tmp/${DEB_NAME}"

sudo dpkg -i "/tmp/${DEB_NAME}"

rm -f "/tmp/${DEB_NAME}" "$JSON_PATH"

