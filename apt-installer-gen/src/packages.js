export const required = [
  'apt-transport-https',
];

export const common = [
  'jq',
  'bat',
  'git',
  'vim',
  'gimp',
  'kazam',
  'unrar',
  'deluge',
  'mcomix',
  'opencc',
  'gparted',
  'filezilla',
  'mediainfo',
  'obs-studio',
  'openssh-server',
  'build-essential',
  'silversearcher-ag',
  // l10n
  'fcitx-mozc',
  'fcitx-chewing',
  'ttf-ancient-fonts',
  'fonts-liberation',
  'fonts-dejavu-core',
  'fonts-wqy-microhei',
  'language-pack-gnome-zh-hant',
].map((name) => ({ name, install: [name] }));

export const simplePPA = [
  ['shutter', 'ppa:linuxuprising/shutter'],
  ['mpv', 'ppa:mc3man/mpv-tests'],
].map(([name, ppa]) => ({
  name,
  preinstall: [`sudo add-apt-repository ${ppa}`],
  install: [name],
}));

const sublimePkg = {
  name: 'sublime text',
  preinstall: [
    'wget -qO - https://download.sublimetext.com/sublimehq-pub.gpg | sudo apt-key add -',
    'echo "deb https://download.sublimetext.com/ apt/stable/" | sudo tee /etc/apt/sources.list.d/sublime-text.list',
  ],
  install: ['sublime-text'],
};

export default [
  ...common,
  ...simplePPA,
  sublimePkg,
];
