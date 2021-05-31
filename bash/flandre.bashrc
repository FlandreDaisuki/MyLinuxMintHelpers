# shellcheck shell=bash
# trim prompt length
function prompt_trimmer() {
  local len="${#PWD}"

  if [[ "$len" -lt 25 ]]; then
    unset PROMPT_DIRTRIM
  elif [[ "$len" -lt 40 ]]; then
    PROMPT_DIRTRIM=4
  else
    PROMPT_DIRTRIM=3
  fi
}

prompt_trimmer

function cd() {
  builtin cd "$@" && prompt_trimmer
}


# setup prompt string with git
function git_prompt() {
  local GREEN_TEXT="\[\033[1;32m\]"
  local RED_TEXT="\[\033[1;31m\]"
  local BLUE_TEXT="\[\033[1;34m\]"
  local RC="\[\033[0m\]" # reset color

  local USER="${GREEN_TEXT}\u${RC}"
  local CWD="${BLUE_TEXT}\w${RC}"

  echo "${USER} ${CWD}${RED_TEXT}\$(__git_ps1) ${RC}\$ "
}
PS1=$(git_prompt)


# add aliases
if [[ -f ~/flandre.aliases ]]; then
  # shellcheck disable=SC1090,SC1091
  . ~/flandre.aliases
else
  touch ~/flandre.aliases
fi

export PATH=~/bin:~/bin/firefox:~/bin/Telegram:$PATH

export N_PREFIX="$HOME/n"; [[ :$PATH: == *":$N_PREFIX/bin:"* ]] || PATH+=":$N_PREFIX/bin"  # Added by n-install (see http://git.io/n-install-repo).

# prune $PATH
# https://unix.stackexchange.com/a/14896
PATH=$(printf "%s" "$PATH" | awk -v RS=':' '!a[$1]++ { if (NR > 1) printf RS; printf $1 }')
export PATH
