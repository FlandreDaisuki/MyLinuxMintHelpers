#!/bin/bash

GITHUB_ZIP="$1"

if [[ -z $GITHUB_ZIP ]]; then
  echo 'Usage: exa-installer.sh exa-linux-x86_64-v0.???.zip'
  exit 0
fi

BASE_FILE=$(basename "$GITHUB_ZIP")
UNZIP_DIR="${BASE_FILE%%.zip}"

# https://the.exa.website/install/linux#manual
rm -rf "$UNZIP_DIR"
unzip "$GITHUB_ZIP" -d "$UNZIP_DIR"
sudo cp "$BASE_FILE_NAME"/bin/* /usr/local/bin/
sudo cp "$BASE_FILE_NAME"/man/* /usr/share/man/man1/

if [[ -d /etc/bash_completion.d ]]; then
  sudo cp "$BASE_FILE_NAME"/completions/exa.bash /etc/bash_completion.d/
fi
