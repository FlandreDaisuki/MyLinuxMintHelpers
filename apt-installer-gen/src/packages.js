export const required = [
  'apt-transport-https',
];

export const common = [
  'jq',
  'gh',
  'vim',
  'gimp',
  'kazam',
  'unrar',
  'ffmpeg',
  'mcomix',
  'mkcert', 'libnss3-tools',
  'opencc',
  'zoxide',
  'gparted',
  'optipng',
  'ripgrep',
  'fail2ban',
  'filezilla',
  'jpegoptim',
  'mediainfo',
  'obs-studio',
  'qbittorrent',
  'virt-manager',
  'openssh-server',
  'build-essential',
  'chromium-browser',
  // l10n
  'fcitx5-mozc',
  'fcitx5-chewing',
  'language-pack-gnome-zh-hant',
  // fonts
  'fonts-noto',
  'fonts-liberation',
  'fonts-dejavu-core',
  'fonts-wqy-microhei',
  'ttf-ancient-fonts',
].map((name) => ({ name, install: [name] }));

export const simplePPA = [
  ['git', 'ppa:git-core/ppa'],
].map(([name, ppa]) => ({
  name,
  preinstall: [`sudo add-apt-repository ${ppa}`],
  install: [name],
}));

const sublimePkg = {
  name: 'sublime text',
  preinstall: [
    'wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/sublimehq-archive.gpg > /dev/null',
    'echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list',
  ],
  install: ['sublime-text'],
};

const winehqPkg = {
  name: 'wine HQ',
  preinstall: [
    'sudo dpkg --add-architecture i386',
    'sudo mkdir -pm755 /etc/apt/keyrings',
    'sudo wget -qO /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key',
    'sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/ubuntu/dists/jammy/winehq-jammy.sources',
  ],
  postinstall: ['sudo apt-get install -y --install-recommends winehq-stable'],
};

const nvidiaDockerPkg = {
  name: 'nvidia-docker',
  preinstall: [
    'curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg',
    `curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list \\
    | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \\
    | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list`,
  ],
  install: ['cuda-drivers', 'nvidia-docker2'],
  postinstall: [
    '# reboot to apply nvidia-docker',
    '# test it by run `docker run --rm --gpus all nvidia/cuda:11.8.0-base-ubuntu22.04 nvidia-smi`',
  ],
};

const dockerIoPkg = {
  name: 'docker.io',
  preinstall: [
    '# Uninstall old versions',
    'for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done',
    '# Add Docker\'s official GPG key:',
    'sudo apt-get update',
    'sudo apt-get install -y ca-certificates curl gnupg',
    'sudo install -m 0755 -d /etc/apt/keyrings',
    'curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg',
    'sudo chmod a+r /etc/apt/keyrings/docker.gpg',
    '# Add the repository to Apt sources:',
    `echo "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu "$(. /etc/os-release && echo "$UBUNTU_CODENAME")" stable" \\
    | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null`,
  ],
  install: ['docker-ce', 'docker-ce-cli', 'containerd.io', 'docker-buildx-plugin', 'docker-compose-plugin'],
};

export default [
  ...common,
  ...simplePPA,
  sublimePkg,
  winehqPkg,
  nvidiaDockerPkg,
  dockerIoPkg,
];
