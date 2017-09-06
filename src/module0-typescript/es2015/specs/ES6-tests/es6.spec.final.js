
// let
describe('ES6: let', function() {
  it('var is function scope', function() {
    if(true) {
      var a = 4;
      var b = 5;
    }
    expect(a + b).toEqual(9);
  });
  it('let is block scoped', function() {

    if(true){
      let a = 4;
      let b = 5;
    }
    // there is no a, b variables
    expect(typeof a).toEqual('undefined');
    expect(typeof b).toEqual('undefined');
  });
  it('let is not hoisted', function() {
    let a = 4;
    let b = 5;
    let res=a+b;
    expect(res).toBe(9);
  });


});


// const
describe('ES6: const', function() {
  it('const cant be changed fail', function() {
    const DO_NOT_CHANGE = 1;
    //DO_NOT_CHANGE = 7; // syntax error
    expect(DO_NOT_CHANGE).toBe(1);
  });
});

// arrow functions
describe('ES6: arrow', function() {

  beforeEach(function() {
    jasmine.clock().install();
  });

  it('arrow function should be the same as regular function', function(){
      let a=3;
      let b=6;

      let sum=function(num1,num2){
          return num1+num2;
      }

       let sumArrow = (num1,num2) => {
         return num1+num2;
       }

       expect(sum(a,b)).toEqual(sumArrow(a,b));
  });
  it('arrow function auto return when curly braces drop', function(){
      let a=3;
      let b=6;

      let sum=function(num1,num2){
          return num1+num2;
       }

       let sumArrow = (num1,num2) => num1+num2;


       expect(sum(a,b)).toEqual(sumArrow(a,b));
  });
  it('arrow function has contextual this', function(){

    this.a=3;
    setTimeout(()=>{
      this.a++
    },200);

    jasmine.clock().tick(201);

    expect(this.a).toEqual(4);
  });

  it('empty arrow function returns undefined', function() {
    let empty = () =>{ };
    expect(empty()).not.toBeDefined();
  });

  afterEach(function(){
    jasmine.clock().uninstall();
  });
});

// class
describe('ES6: class', function() {
  it('is Just a plain old javascript object', function() {

     class Person {
        getName() {
           return 'John';
        }
     }
     let p = new Person();

    expect(p.getName()).toBe('John');
    expect(Person.prototype.getName.call(p)).toBe('John');
  });

  it('can have a constructor', function() {

    class Person {
      constructor (name){
         this._name = name;
      }
      getName() {
        return this._name;
      }
    }
    let p = new Person('John');

    expect(p.getName()).toBe('John');
    expect(Person.prototype.getName.call(p)).toBe('John');
  });

  it('can have a property getter and setter', function() {

    class Person {
      constructor (name){
        this._name = name;
      }

      get name(){
        return this._name;
      }

      set name(value){
        this._name=value.toLowerCase();
      }

    }
    let p = new Person('John');

    expect(p.name).toBe('John');
    p.name='James';
    expect(p.name).toBe('james');

  });
  it('can inherit other classes', function() {

    class Person {
      constructor (name){
        this._name = name;
      }

      get name(){
        return this._name;
      }

      set name(value){
        this._name=value.toLowerCase();
      }
    }

    class Empolyee extends Person{

      constructor(name,email){
        super(name);
        this.email=email;
      }


    }
    let e = new Empolyee('John','john.doe@gmail.com');

    expect(e.name).toBe('John');
    expect(e.email).toBe('john.doe@gmail.com');
    e.name='James';
    expect(e.name).toBe('james');

  });

});

// defaults
describe('ES6: defaults', function() {
  it('provide defaults', function() {
    function add (a, b = 10){
      return a + b;
    }

    expect(add(2)).toBe(12);
  });

  it('provides defaults with undefined', function() {
    function add (a, b = 10){
      return a + b;
    }

    expect(add(2, undefined)).toBe(12);
  });
  it('provides defaults in arrow functions', function() {
    let add=(a, b = 10) => a + b;


    expect(add(2, undefined)).toBe(12);
  });
  it('provides defaults callback functions', function() {

    let add=(a,b=10,cb=(result)=>result) => cb(a+b);

    expect(add(2, undefined)).toBe(12);
  });
});

// rest parameters
describe('ES6: rest', function() {
  it('rest like args', function() {

    function printLength(...args){
      return args.length;
    }

    expect(printLength( 1, 2, 3 )).toBe(3);
    expect(printLength([1, 2, 3])).toBe(1);
    expect(printLength()).toBe(0);
  });
});

// spread operator
describe('ES6: spread operator', function() {
  it('array as parameters', function() {

    function doSomething(a, b, c){
      return a + b + c ;
    }

    expect(doSomething( 1, 2, 3 )).toBe(6);
    expect(doSomething(...[1, 2, 3])).toBe(6);
  });

  it('builds an array', function() {

    let arr = [1, 2, 3];
    let arr2 = [...arr, 4, 5, 6]

    expect(arr2).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

// templates
describe('ES6: template literals', function() {
  it('string format', function() {

    function sayHello(name){
      return `Hello ${name}`;
    }

    expect(sayHello('John')).toBe('Hello John');
  });

});

