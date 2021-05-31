import { required } from './packages';

export const generateShellScript = (packages) => {
  const selected = packages.filter((pkg) => pkg.checked);
  const preliminary = selected.flatMap((pkg) => pkg.preinstall).filter(Boolean);
  const toInstallPackages = selected.flatMap((pkg) => pkg.install).filter(Boolean);
  const tidyUp = selected.flatMap((pkg) => pkg.postinstall).filter(Boolean);
  const sh = `
#!/bin/bash

# Install required packages
sudo apt-get install -y ${required.join(' ')}

# Preliminary before install
${preliminary.join('\n')}

sudo apt-get update
sudo apt-get install -y ${toInstallPackages.join(' ')}

# Tidy up if needed
${tidyUp.join('\n')}

echo 'Done!'
`.trimStart();

  return sh;
};
