const assert = require('assert'); 
const calculator = require('../index')  
// We can group similar tests inside a describe block 
describe("Simple Calculations", () => { 
  before(() => { 
    console.log( "This part executes once before all tests" ); 
  }); 
  
  after(() => { 
    console.log( "This part executes once after all tests" ); 
  }); 
      
  // We can add nested blocks for different tests 
  describe( "Algebric operations test", () => { 
    beforeEach(() => { 
      console.log( "executes before every test" ); 
    }); 
      
    it("Is returning 5 when adding 2 + 3", () => { 
      assert.equal(5, calculator.calculate(2,3,options={
          "operation":"sum"
      })); 
    }); 
  
    it("Is returning 6 when multiplying 2 * 3", () => { 
      assert.equal(6,  calculator.calculate(2,3,options={
        "operation":"product"
    })); 
    });
    it("Is returning 1.5 when divide 3 / 2", () => { 
      assert.equal(1.5,  calculator.calculate(3,2,options={
        "operation":"divide"
    })); 
    });
    it("Is returning 1 when finding remainder 3 % 2", () => { 
      assert.equal(1,  calculator.calculate(3,2,options={
        "operation":"remainder"
    })); 
    });
    it("Is returning Invalid operation when dividing 3 / 0", () => { 
      assert.equal("Invalid operation",  calculator.calculate(3,0,options={
        "operation":"divide"
    })); 
    });
    it("Is returning Invalid operation when finding remainder 3 % 0", () => { 
      assert.equal("Invalid operation",  calculator.calculate(3,0,options={
        "operation":"remainder"
    })); 
    }); 
  });  
});