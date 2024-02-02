import { d as defineEventHandler, g as getQuery } from './nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';

const twzipcode_get = defineEventHandler((event) => {
  const { city } = getQuery(event);
  return fetch(`http://api.opencube.tw/twzipcode?city=${city}`).then((response) => response.json());
});

export { twzipcode_get as default };
//# sourceMappingURL=twzipcode.get.mjs.map
