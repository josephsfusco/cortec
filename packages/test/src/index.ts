import Cortec from '@cortec/core';
import Newrelic from '@cortec/newrelic';
import Polka from '@cortec/polka';
import Redis from '@cortec/redis';
import Server from '@cortec/server';

const cortec = new Cortec({ name: 'test', version: '1.0.0' });
const newrelic = new Newrelic();
const polka = new Polka();
const server = new Server(polka.name);
const redis = new Redis();

cortec.use(newrelic);
cortec.use(redis);
cortec.use(polka);
cortec.use(server);

cortec.load().then(() => {
  process.send?.('ready');
});
