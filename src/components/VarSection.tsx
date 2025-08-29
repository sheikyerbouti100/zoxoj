import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const VarSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic var Declaration',
      code: `var greeting = "Hello World!";
console.log(greeting);

// Can be redeclared
var greeting = "Hello Again!";
console.log(greeting);`,
      explanation: 'Variables declared with var can be redeclared in the same scope without errors.'
    },
    {
      title: 'Function Scoping',
      code: `function example() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 - accessible outside the block
}

example();

// console.log(x); // ReferenceError: x is not defined`,
      explanation: 'var is function-scoped, meaning it\'s accessible anywhere within the function, even outside the block where it was declared.'
    },
    {
      title: 'Hoisting Behavior',
      code: `console.log(hoistedVar); // undefined (not an error!)

var hoistedVar = "I am hoisted";

console.log(hoistedVar); // "I am hoisted"

// This is how JavaScript interprets it:
// var hoistedVar; // hoisted to top
// console.log(hoistedVar); // undefined
// hoistedVar = "I am hoisted";`,
      explanation: 'var declarations are hoisted to the top of their scope and initialized with undefined.'
    },
    {
      title: 'Global Scope Issues',
      code: `// In global scope, var creates window property
var globalVar = "I'm global";
console.log(window.globalVar); // "I'm global" (in browser)

// Loop variable problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("var loop:", i); // Will log 3, 3, 3
  }, 100);
}`,
      explanation: 'var in global scope creates properties on the global object and can cause issues with closures in loops.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="The var Keyword"
        description="The original way to declare variables in JavaScript. It has function scope and some quirky behaviors that modern alternatives address."
        characteristics={[
          'Function-scoped (not block-scoped)',
          'Can be redeclared in the same scope',
          'Hoisted and initialized with undefined',
          'Creates global object properties when declared globally'
        ]}
        color="orange"
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

export default VarSection;