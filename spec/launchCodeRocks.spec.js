const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){

  //testing code here...

  let array = [{
 phrase: 'When passed a number that is ONLY divisible by 2, return "Launch!"',
expected1:'Launch!',
actual:2
  },
{
phrase:'When passed a number that is ONLY divisible by 3, return "Code!"',
expected1:'Code!',
actual:3
  },
  {
phrase:'When passed a number that is ONLY divisible by 5, return "Rocks!"',
expected1:'Rocks!',
actual:5
  },
  {
phrase:'When passed a number that is divisible by 2 AND 3, return "LaunchCode!"',
expected1:"LaunchCode!",
actual:6
  },
  {
phrase:'When passed a number that is divisible by 3 AND 5, return "Code Rocks!"',
expected1:"Code Rocks!",
actual:15
  },
  {
phrase:'When passed a number that is divisible by 2 AND 5, return "CRASH!!!!"',
expected1:"CRASH!!!!",
actual:10
  },
  {
phrase:'When passed a number that is divisible by 3, 2 AND 5, return "LaunchCode Rocks!"',
expected1:"LaunchCode Rocks!",
actual:30
  },
  {
phrase:'When passed a number that is NOT divisible by 3, 2 OR 5, return "Rutabagas! That doesn`t work." ',
expected1:"Rutabagas! That doesn`t work.",
actual:30
  },
  ];


for (object in array){
  it(array[object].phrase, function(){
    let expected = array[object].expected1
    let actual = launchOutput(array[object.actual]);
    assert.strictEqual(actual,expected);
  });
}

  //   it('When passed a number that is ONLY divisible by 3, return "Code!"', function(){
  //   let expected = 'Code!'
  //   let actual = launchOutput(3);
  //   assert.strictEqual(actual,expected);
  // });

  //   it('When passed a number that is ONLY divisible by 5, return "Rocks!"', function(){
  //   let expected = 'Rocks!'
  //   let actual = launchOutput(5);
  //   assert.strictEqual(actual,expected);
  // });

  //   it('When passed a number that is divisible by 2 AND 3, return "LaunchCode!"', function(){
  //   let expected = 'LaunchCode!'
  //   let actual = launchOutput(6);
  //   assert.strictEqual(actual,expected);
  // });

  //   it('When passed a number that is divisible by 3 AND 5, return "Code Rocks!"', function(){
  //   let expected = 'Code Rocks!'
  //   let actual = launchOutput(15);
  //   assert.strictEqual(actual,expected);
  // });

  //   it('When passed a number that is divisible by 2 AND 5, return "CRASH!!!!"', function(){
  //   let expected = 'CRASH!!!!'
  //   let actual = launchOutput(10);
  //   assert.strictEqual(actual,expected);
  // });

  //   it('When passed a number that is divisible by 3, 2 AND 5, return "LaunchCode Rocks!"', function(){
  //   let expected = 'LaunchCode Rocks!'
  //   let actual = launchOutput(30);
  //   assert.strictEqual(actual,expected);
  // });

  //   it('When passed a number that is NOT divisible by 3, 2 OR 5, return "Rutabagas! That doesn`t work." ', function(){
  //   let expected = "Rutabagas! That doesn`t work."
  //   let actual = launchOutput(79);
  //   assert.strictEqual(actual,expected);
  // });


});