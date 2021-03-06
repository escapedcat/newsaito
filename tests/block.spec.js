const assert = require('chai').assert

const Big = require('big.js');
const saito = require('../lib/saito');
// const Block = require('../lib/saito/block');

describe('BLOCK', () => {
  var app = {};
  app.crypto = new saito.crypto();
  var newblock = new saito.block(app);

  describe('Constructor', () => {
    it('should have all necessary fields for a Block object', () => {
      assert.isNumber(newblock.block.ts, "type of timestamp (ts)")
      assert.equal(newblock.block.prevhash, "")
      assert.equal(newblock.block.merkle, "")
      assert.equal(newblock.block.creator, "")
      assert.equal(newblock.block.id, 0)
      assert.deepEqual(newblock.block.txsjson, [])
      assert.deepEqual(newblock.block.bf, {})
      assert.equal(newblock.block.difficulty, 0.1875)
      assert.equal(newblock.block.paysplit, 0.5)
      assert.deepEqual(newblock.block.treasury, Big("10000000000.0"))
      assert.deepEqual(newblock.block.coinbase, Big("0.0"))
      assert.deepEqual(newblock.block.reclaimed, Big("0.0"))
      assert.equal(newblock.block.vote, 0)
      assert.equal(newblock.confirmations, -1)
    });
  });

  describe('returnHash', () => {
    it('should return a string of the hash created from signatureSource()', () => {
      assert.isString(newblock.returnHash());
    });

    it('should return the same value after multiple calls', () => {
      let hash = newblock.returnHash();
      assert.equal(hash, newblock.returnHash());
    });
  });

  describe('returnSignatureSource', () => {
    it('should return a string', () => {
      assert.isString(newblock.returnSignatureSource());
    })
  });

});
