<script>
import { onMount } from 'svelte';
import Clipboard from 'clipboard';
import { saveAs } from 'file-saver';

import selectables from './packages'
import { generateShellScript } from './helpers'


export let packages = selectables.map((pkg) => Object.assign(pkg, { checked: false }));

$: generated = generateShellScript(packages);


export const onClearAllClick = () => {
  packages = selectables.map((pkg) => Object.assign(pkg, { checked: false }))
}
export const onSelectAllClick = () => {
  packages = selectables.map((pkg) => Object.assign(pkg, { checked: true }))
}
export const onDownloadClick = () => {
  saveAs(new Blob([generated], {type: "text/plain;charset=utf-8"}), 'apt-installer.sh');
}

let clip;
export let copyBtn;
onMount(() => {
  clip = new Clipboard(copyBtn, { text: () => generated });
})

$: {
  const shareable = packages.filter((pkg) => pkg.checked).map((pkg) => pkg.name);
  const u = new URLSearchParams(location.search);
  if (shareable.length) {
    u.set('pkg', shareable.join(','));
  } else {
    u.delete('pkg')
  }
  if (u.toString()) {
    history.replaceState(null, null, '?' + u.toString());
  } else {
    history.replaceState(null, null, location.pathname);
  }
};

const query = new URLSearchParams(location.search);
const pkgQuery = query.get('pkg');
if(pkgQuery) {
  const queriedPackages = pkgQuery
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  packages = selectables.map((pkg) => {
    const checked = queriedPackages.includes(pkg.name);
    return Object.assign(pkg, { checked });
  })
}
</script>

<main>
  <h1>apt 安裝腳本產生器</h1>
  <nav>
    <button on:click="{onClearAllClick}">清空</button>
    <button on:click="{onSelectAllClick}">全選</button>
  </nav>
  <ul id="packages">
    {#each packages as pkg}
      <li class="package">
        <label>
          <input type="checkbox" bind:checked="{pkg.checked}">
          <span>{pkg.name}</span>
        </label>
      </li>
    {/each}
  </ul>
  <nav>
    <button on:click="{onDownloadClick}">下載腳本</button>
    <button bind:this="{copyBtn}">複製文字</button>
  </nav>
  <output>
    <code>
      <pre id="generated">{generated}</pre>
    </code>
  </output>
</main>

<style>
main {
  padding: 1em;
  max-width: 240px;
  margin: 0 auto;
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 4em;
  font-weight: 100;
}

ul#packages {
  display: grid;
  grid-template-columns: repeat(4, auto);
  padding: 0;
}

li.package {
  list-style: none;
  text-align: left;
}

pre#generated {
  white-space: pre-wrap;
}

@media (min-width: 640px) {
  main {
    max-width: 1080px;
  }
}
</style>
