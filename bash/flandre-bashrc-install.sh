#!/bin/bash

FILE_PATH=$(realpath "$0")
DIR_PATH=$(dirname "$FILE_PATH")

HAS_INSTALLED=$(grep -q --perl-regex '^[.] ~/flandre[.]bashrc$' ~/.bashrc)
! $HAS_INSTALLED && \
cat >> ~/.bashrc << EOF

# Installed by flandre-bashrc-install.sh
. ~/flandre.bashrc
EOF

[[ ! -f ~/flandre.bashrc ]] && cp "$DIR_PATH/bash/flandre.bashrc" ~/flandre.bashrc
[[ ! -f ~/flandre.aliases ]] && cp "$DIR_PATH/bash/flandre.aliases" ~/flandre.aliases

! $HAS_INSTALLED && echo 'call "source ~/flandre.bashrc" to apply immediately'
