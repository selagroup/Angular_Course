
// let
describe('ES6: let', function() {
  it('var is function scope', function() {
    if(true) {
      var a = 4;
      var b = 5;
    }
    expect(a + b).toEqual(9);
  });
  xit('let is block scoped', function() {


  });
  xit('let is not hoisted', function() {

  });


});


// const
describe('ES6: const', function() {
  xit('const cant be changed fail', function() {

  });
});

// arrow functions
describe('ES6: arrow', function() {

  beforeEach(function() {
    jasmine.clock().install();
  });

  xit('arrow function should be the same as regular function', function(){
      let a=3;
      let b=6;

      let sum=function(num1,num2){
          return num1+num2;
      }


  });
  xit('arrow function auto return when curly braces drop', function(){

  });
  xit('arrow function has contextual this', function(){

  });

  xit('empty arrow function returns undefined', function() {

  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });
});

// class
describe('ES6: class', function() {
  xit('is Just a plain old javascript object', function() {


  });

  xit('can have a constructor', function() {


  });

  xit('can have a property getter and setter', function() {



  });
  xit('can inherit other classes', function() {


  });

});

// defaults
describe('ES6: defaults', function() {
  xit('provide defaults', function() {

  });

  xit('provides defaults with undefined', function() {

  });
  xit('provides defaults in arrow functions', function() {

  });
  xit('provides defaults callback functions', function() {


  });
});

// rest parameters
describe('ES6: rest', function() {
  xit('rest like args', function() {

    function printLength(...args){
      return args.length;
    }

  });
});

// spread operator
describe('ES6: spread operator', function() {
  xit('array as parameters', function() {

    function doSomething(a, b, c){
      return a + b + c ;
    }


  });

  xit('builds an array', function() {

    let arr = [1, 2, 3];
    let arr2 = [...arr, 4, 5, 6]

    expect(arr2).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

// templates
describe('ES6: template literals', function() {
  xit('string format', function() {

  });

});

