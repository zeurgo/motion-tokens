const glob = require('glob');
const { promisify } = require('util');
const path = require('path');

const globPromise = promisify(glob);

async function getFiles(pattern, prefix) {
  const globResult = await globPromise(pattern);

  return globResult.map(item => prefix + path.basename(item));
}

module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'scope-enum': async () => [
      2,
      'always',
      [
        'eslint',
        'prettier',
        'commitlint',
        'husky',
        'package-json',
        'vscode',
        // 'proposal',
        ...(await getFiles('./src/**/*?(.js)', 'src#')),
        // ...(await getFiles('./test/**/*?(.js)', 'test#')),
      ],
    ],
  },
};
