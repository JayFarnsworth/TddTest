const assert = require('chai').assert;
const warmup = require('../warmup.js');

describe('warmup', ()=>{
  describe('#doSomeMath', ()=>{
    it('takes a number and multiplies it by 80085', ()=>{
      assert.deepEqual(warmup.doSomeMath(5), 400425);
      assert.deepEqual(warmup.doSomeMath(200), 16017000);
      assert.deepEqual(warmup.doSomeMath(-2), -160170);
    })
  })
})
