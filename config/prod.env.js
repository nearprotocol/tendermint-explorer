'use strict'
module.exports = {
  NODE_ENV: '"production"',
  RPC_ADDR: process.env.RPC_ADDR ? `"${process.env.RPC_ADDR}"` : '"http://localhost:26657"',
  WS_ADDR: process.env.WS_ADDR ? `"${process.env.WS_ADDR}"` : '"ws://localhost:26657"',

}
