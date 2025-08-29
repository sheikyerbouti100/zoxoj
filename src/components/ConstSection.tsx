import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const ConstSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic const Declaration',
      code: `const appName = "JS Learning App";
console.log(appName);

// Cannot reassign
// appName = "New Name"; // TypeError: Assignment to constant variable

// Must initialize when declaring
// const uninitialized; // SyntaxError: Missing initializer`,
      explanation: 'const creates constants that must be initialized and cannot be reassigned.'
    },
    {
      title: 'Block Scoping (Same as let)',
      code: `const globalConstant = "I'm global";

if (true) {
  const blockConstant = "I'm in a block";
  console.log(blockConstant);
  
  // Can shadow outer constants
  const globalConstant = "I'm shadowing";
  console.log("Inside block:", globalConstant);
}

console.log("Outside block:", globalConstant);
// console.log(blockConstant); // ReferenceError!`,
      explanation: 'const has the same block-scoping behavior as let, creating new scopes within blocks.'
    },
    {
      title: 'Object and Array Mutation',
      code: `// The REFERENCE is constant, not the contents
const person = {
  name: "Alice",
  age: 25
};

// This is allowed - modifying object properties
person.age = 26;
person.job = "Developer";
console.log(person);

// This would fail:
// person = {}; // TypeError!

const colors = ["red", "green"];
colors.push("blue"); // Allowed
colors[0] = "crimson"; // Allowed
console.log(colors);

// colors = []; // This would fail!`,
      explanation: 'const prevents reassignment of the variable, but objects and arrays can still be mutated.'
    },
    {
      title: 'When to Use const vs let',
      code: `// Use const for values that won't be reassigned
const API_ENDPOINT = "https://api.example.com";
const TAX_RATE = 0.08;

// Use const for functions
const calculateTotal = (price, tax = TAX_RATE) => {
  return price * (1 + tax);
};

// Use let for values that will change
let currentUser = null;
let isLoading = true;

// Simulate async operation
setTimeout(() => {
  currentUser = { name: "Alice" };
  isLoading = false;
  console.log("User loaded:", currentUser);
  console.log("Total for $100:", calculateTotal(100));
}, 100);`,
      explanation: 'Use const by default for immutable references, and let only when you need to reassign the variable.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="The const Keyword"
        description="Creates immutable bindings. Use const by default and only use let when you need to reassign the variable. This leads to more predictable code."
        characteristics={[
          'Block-scoped (same as let)',
          'Cannot be reassigned after declaration',
          'Must be initialized when declared',
          'Objects and arrays can still be mutated'
        ]}
        color="green"
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

export default ConstSection;