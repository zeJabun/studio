#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const util = require('util');

const exec = util.promisify(require('child_process').exec);

const [targetDirectory] = process.argv.slice(2);

const compileLegacyAppLogoImages = async () => {
  const { stdout } = await exec(
    `git diff HEAD~1 --name-only --diff-filter=AMR | grep "src/apps/.*/assets/logo.png" || true`,
  );

  if (stdout === '') return;

  const filepaths = stdout.split('\n').filter(s => s !== '');

  filepaths.forEach(filepath => {
    const [, appId] = filepath.match(/src\/apps\/(.*)\/assets\/.*/);
    const newFile = path.basename(filepath).replace('logo', appId);

    if (!fs.existsSync(targetDirectory)) fs.mkdirSync(targetDirectory, { recursive: true });
    fs.copyFileSync(filepath, path.join(targetDirectory, newFile));
  });
};

const compileAppAssetImages = async () => {
  const { stdout } = await exec(
    `git diff HEAD~1 --name-only --diff-filter=AMR | grep "src/apps/.*/assets/.*.png" || true`,
  );

  if (stdout === '') return;

  const filepaths = stdout.split('\n').filter(s => s !== '');

  filepaths.forEach(filepath => {
    const [, appId] = filepath.match(/src\/apps\/(.*)\/assets\/.*/);
    const appDirectory = path.join(targetDirectory, appId);
    const newFile = path.basename(filepath);

    if (!fs.existsSync(appDirectory)) fs.mkdirSync(appDirectory, { recursive: true });
    fs.copyFileSync(filepath, path.join(appDirectory, newFile));
  });
};

const run = async () => {
  await compileLegacyAppLogoImages();
  await compileAppAssetImages();
  exit(0);
};

run().catch(err => {
  // eslint-disable-next-line no-console
  console.log('Failed: ', err);
});
