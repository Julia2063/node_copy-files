'use strict';
/* eslint-disable no-console */

const { copyFile } = require('fs/promises');

async function app() {
  const args = process.argv.slice(2);

  let source;
  let destination;

  if (args[0] === 'cp') {
    [, source, destination] = args;
  } else {
    [source, destination] = args;
  }

  if (!source || !destination) {
    console.error("I can just copy file with command 'cp'!");

    return;
  }

  if (source === destination) {
    console.error('You try to copy to the same location!');

    return;
  }

  try {
    await copyFile(source, destination);
    console.log(`${source} was copied to ${destination}`);
  } catch {
    console.error('The file could not be copied');
  }
}

app();

module.exports = {
  app,
};
