const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

//what test functions to add? added in README.md

describe(`Throw an error to invalid input`, function(){
  test("'it is an invalid input", () => {
    expect(timeWord('50.00')).toEqual('Please enter a valid time')
  })
})

describe(`return noon (or midhgnit)`, function(){
  test("'it is noon", () => {
    expect(timeWord('12:00')).toEqual('noon');
    expect(timeWord('12:01')).not.toEqual('noon');
  })
})

describe(`return time as inputted`, function(){
  test("returns time", () => {
    expect(timeWord('00:12')).toEqual('twelve twelve am');
    expect(timeWord('01:00')).toEqual('one oclock am');
  })
})
