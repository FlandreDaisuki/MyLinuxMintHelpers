#!/bin/sh

# check if root
# https://serverfault.com/a/37836
if [ "$(/usr/bin/id -u)" -ne 0 ]; then
    echo "This script is not running as root. Try 'sudo $0'."
    exit
fi

BACKUP_NAME='no-coin-hosts.original'

if [ -f "/root/$BACKUP_NAME" ]; then
  echo "You have already installed!"
  exit
fi

cp /etc/hosts "/root/$BACKUP_NAME"
cat > /root/hosts-nocoin.sh << EOF
#!/bin/sh
cd /root && \
wget https://raw.githubusercontent.com/hoshsadiq/adblock-nocoin-list/master/hosts.txt -O hosts.txt.1 && \
wget https://gitlab.com/ZeroDot1/CoinBlockerLists/-/raw/master/hosts -O hosts.txt.2 && \
cat ${BACKUP_NAME} hosts.txt* > /etc/hosts && \
rm hosts.txt*
EOF

chmod +x /root/hosts-nocoin.sh
(crontab -l; echo "0 0 * * * /root/hosts-nocoin.sh") | crontab -
