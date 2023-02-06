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
  'deluge',
  'ffmpeg',
  'mcomix',
  'mkcert', 'libnss3-tools',
  'opencc',
  'zoxide',
  'gparted',
  'optipng',
  'ripgrep',
  'fail2ban',
  'docker.io', 'docker-compose',
  'filezilla',
  'jpegoptim',
  'mediainfo',
  'obs-studio',
  'openssh-server',
  'build-essential',
  'chromium-browser',
  // l10n
  'fcitx-mozc',
  'fcitx-chewing',
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
}

const nvidiaDockerPkg = {
  name: 'nvidia-docker',
  preinstall:[
    'curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg',
    `curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list \\
    | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' \\
    | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list`
  ],
  install:['cuda-drivers', 'nvidia-docker2'],
  postinstall:[
    '# reboot to apply nvidia-docker',
    '# test it by run `docker run --rm --gpus all nvidia/cuda:11.8.0-base-ubuntu22.04 nvidia-smi`'
  ]
}

export default [
  ...common,
  ...simplePPA,
  sublimePkg,
  winehqPkg,
  nvidiaDockerPkg,
];
