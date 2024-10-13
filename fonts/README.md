# 實用字體

字體檔放在 `~/.local/share/fonts` 後使用 `fc-cache -f` 更新快取

## 網頁/系統

- [jf open 粉圓](https://github.com/justfont/open-huninn-font/releases/download/v1.1/jf-openhuninn-1.1.zip)
- [饅頭黑體](https://github.com/mant0u0/MantouSans/archive/refs/tags/v1.010.zip)
- [台北黑體](https://sites.google.com/view/jtfoundry/zh-tw/downloads?authuser=0)
- [文泉驛微米黑](https://flandredaisuki.github.io/MyLinuxMintHelpers/apt/?pkg=fonts-wqy-microhei)
- [教育部標準楷書字形檔](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/edukai.pdf)
- [教育部標準字體宋體字形檔](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/edusun.pdf)
- [教育部隸書字形檔](https://language.moe.gov.tw/001/Upload/Files/site_content/M0001/eduli.pdf)

## 程式/終端機

- [Nerd Fonts](https://www.nerdfonts.com/)
- [LiberationMono](https://flandredaisuki.github.io/MyLinuxMintHelpers/apt/?pkg=fonts-liberation)
- [Dejavu Sans Mono](https://flandredaisuki.github.io/MyLinuxMintHelpers/apt/?pkg=fonts-dejavu-core)
- [Cascadia Code](https://github.com/microsoft/cascadia-code/releases/latest)

## fonts.conf

`~/.config/fontconfig/fonts.conf`

```xml
<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  # https://wiki.archlinux.org/title/Font_configuration/Examples#CJK,_but_other_Latin_fonts_are_preferred
  <alias binding="strong">
    <family>monospace</family>
    <prefer>
      <family>Liberation Mono</family>
      <family>DejaVu Sans Mono</family>
      <family>WenQuanYi Micro Hei Mono</family>
    </prefer>
  </alias>

  <alias binding="strong">
    <family>sans-serif</family>
    <prefer>
      <family>Taipei Sans TC Beta</family>
      <family>WenQuanYi Micro Hei</family>
      <family>Noto Sans</family>
    </prefer>
  </alias>

  <alias binding="strong">
    <family>serif</family>
    <prefer>
      <family>DejaVu Serif</family>
      <family>Noto Serif CJK TC</family>
    </prefer>
  </alias>
</fontconfig>
```
