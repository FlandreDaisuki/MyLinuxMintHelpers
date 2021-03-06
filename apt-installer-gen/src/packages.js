export const required = [
  'apt-transport-https',
];

export const common = [
  'jq',
  'vim',
  'gimp',
  'kazam',
  'unrar',
  'deluge',
  'mcomix',
  'opencc',
  'gparted',
  'optipng',
  'ripgrep',
  'filezilla',
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
  'ttf-ancient-fonts',
  'fonts-noto',
  'fonts-liberation',
  'fonts-dejavu-core',
  'fonts-wqy-microhei',
].map((name) => ({ name, install: [name] }));

export const simplePPA = [
  ['git', 'ppa:git-core/ppa'],
  ['mpv', 'ppa:mc3man/mpv-tests'],
  ['shutter', 'ppa:linuxuprising/shutter'],
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
