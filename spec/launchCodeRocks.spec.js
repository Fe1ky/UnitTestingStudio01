const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  //testing code here...
  it('When passed a number that is ONLY divisible by 2, return "Launch!"', function(){
    let expected = 'Launch!'
    let actual = launchOutput(2);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is ONLY divisible by 3, return "Code!"', function(){
    let expected = 'Code!'
    let actual = launchOutput(3);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is ONLY divisible by 5, return "Rocks!"', function(){
    let expected = 'Rocks!'
    let actual = launchOutput(5);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is divisible by 2 AND 3, return "LaunchCode!"', function(){
    let expected = 'LaunchCode!'
    let actual = launchOutput(6);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is divisible by 3 AND 5, return "Code Rocks!"', function(){
    let expected = 'Code Rocks!'
    let actual = launchOutput(15);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is divisible by 2 AND 5, return "CRASH!!!!"', function(){
    let expected = 'CRASH!!!!'
    let actual = launchOutput(10);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is divisible by 3, 2 AND 5, return "LaunchCode Rocks!"', function(){
    let expected = 'LaunchCode Rocks!'
    let actual = launchOutput(30);
    assert.strictEqual(actual,expected);
  });

    it('When passed a number that is NOT divisible by 3, 2 OR 5, return "Rutabagas! That doesn`t work." ', function(){
    let expected = "Rutabagas! That doesn`t work."
    let actual = launchOutput(79);
    assert.strictEqual(actual,expected);
  });


});