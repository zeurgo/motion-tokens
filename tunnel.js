// eslint-disable-next-line import/no-extraneous-dependencies
const tunnel = require('localtunnel');

tunnel({ port: 8080, subdomain: 'playground-motion-jota' }).then(tn => {
  // eslint-disable-next-line no-console
  console.log(tn.url);

  process.on('exit', tn.close);
});
