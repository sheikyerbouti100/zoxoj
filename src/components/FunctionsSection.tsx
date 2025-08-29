import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const FunctionsSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic Function Declaration',
      code: `// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));

// Function with multiple parameters
function add(a, b) {
  return a + b;
}

console.log("5 + 3 =", add(5, 3));

// Function without return (returns undefined)
function sayHello() {
  console.log("Hello from function!");
}

sayHello();`,
      explanation: 'Function declarations create reusable blocks of code. They are hoisted and can be called before they are defined.'
    },
    {
      title: 'Function Hoisting',
      code: `// Can call function before declaration due to hoisting
console.log("Result:", multiply(4, 5));

function multiply(x, y) {
  return x * y;
}

// Another example
console.log("Square of 7:", square(7));

function square(num) {
  return num * num;
}

// Hoisting only works with function declarations, not expressions
try {
  console.log(notHoisted()); // This will error
} catch (error) {
  console.log("Error:", error.message);
}

var notHoisted = function() {
  return "I'm not hoisted!";
};`,
      explanation: 'Function declarations are fully hoisted, meaning you can call them before they appear in the code.'
    },
    {
      title: 'Function Expressions vs Declarations',
      code: `// Function declaration (hoisted)
function declaration() {
  return "I'm a declaration";
}

// Function expression (not hoisted)
const expression = function() {
  return "I'm an expression";
};

// Named function expression
const namedExpression = function myFunc() {
  return "I'm a named expression";
};

// Arrow function (ES6)
const arrow = () => {
  return "I'm an arrow function";
};

// Shorter arrow function
const shortArrow = () => "I'm a short arrow function";

console.log(declaration());
console.log(expression());
console.log(namedExpression());
console.log(arrow());
console.log(shortArrow());`,
      explanation: 'Different ways to create functions have different behaviors regarding hoisting and syntax.'
    },
    {
      title: 'Parameters and Arguments',
      code: `// Default parameters (ES6)
function greetWithDefault(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

console.log(greetWithDefault());
console.log(greetWithDefault("Alice"));
console.log(greetWithDefault("Bob", "Hi"));

// Rest parameters
function sum(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log("Sum of 1,2,3:", sum(1, 2, 3));
console.log("Sum of 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

// Arguments object (older approach)
function oldSum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("Old sum:", oldSum(10, 20, 30));`,
      explanation: 'Functions can have default parameters, rest parameters for variable arguments, and access to the arguments object.'
    },
    {
      title: 'Arrow Functions and this Binding',
      code: `// Regular function vs arrow function
const obj = {
  name: "MyObject",
  
  // Regular function method
  regularMethod: function() {
    return "Regular: " + this.name;
  },
  
  // Arrow function method
  arrowMethod: () => {
    return "Arrow: " + this.name; // 'this' is not bound to obj
  },
  
  // Method that uses arrow function inside
  testArrows: function() {
    const regularInside = function() {
      return "Inside regular: " + this.name;
    };
    
    const arrowInside = () => {
      return "Inside arrow: " + this.name;
    };
    
    console.log(regularInside.call(this));
    console.log(arrowInside());
  }
};

console.log(obj.regularMethod());
console.log(obj.arrowMethod());
obj.testArrows();`,
      explanation: 'Arrow functions do not bind their own "this" - they inherit it from the enclosing scope.'
    },
    {
      title: 'Higher-Order Functions',
      code: `// Function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log("Double 5:", double(5));
console.log("Triple 4:", triple(4));

// Function that takes a function as parameter
function processArray(arr, processor) {
  const result = [];
  for (const item of arr) {
    result.push(processor(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const squared = processArray(numbers, x => x * x);
const doubled = processArray(numbers, x => x * 2);

console.log("Original:", numbers);
console.log("Squared:", squared);
console.log("Doubled:", doubled);`,
      explanation: 'Higher-order functions either take functions as parameters or return functions, enabling powerful functional programming patterns.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="Function Declarations"
        description="Create reusable blocks of code that can accept parameters and return values. Functions are the building blocks of JavaScript applications and enable code organization and reusability."
        characteristics={[
          'Function declarations are fully hoisted',
          'Can accept parameters with default values',
          'Support rest parameters for variable arguments',
          'Arrow functions have different "this" binding behavior'
        ]}
        color="blue"
      />
      
      <div className="grid gap-6">
        {examples.map((example, index) => (
          <CodeExample
            key={index}
            title={example.title}
            code={example.code}
            explanation={example.explanation}
          />
        ))}
      </div>
    </div>
  );
};

export default FunctionsSection;