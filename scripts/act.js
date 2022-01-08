#!/usr/bin/env zx

import os from 'os';

function getArchParam() {
  return (os.platform() === 'darwin' && os.arch() === 'arm64') 
    ? ['--container-architecture', 'linux/amd64']
    : [''];
}

function getJobName() {
  return process.argv[3] || 'workflow_dispatch';
}

const params = [getJobName(), ...getArchParam(), '--env-file', './scripts/act.env'];

console.log(chalk.blue`$ Run Github workflow at local`);
await $`act ${params}`;