import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const LetSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic let Declaration',
      code: `let counter = 0;
console.log(counter);

// Can reassign
counter = 1;
console.log(counter);

// Cannot redeclare in same scope
// let counter = 2; // SyntaxError: Identifier 'counter' has already been declared`,
      explanation: 'let allows reassignment but prevents accidental redeclaration in the same scope.'
    },
    {
      title: 'Block Scoping in Action',
      code: `let x = "global";

if (true) {
  let x = "block"; // Different variable
  console.log("Inside block:", x);
}

console.log("Outside block:", x);

// Another example with for loops
for (let i = 0; i < 2; i++) {
  let loopVar = \`iteration \${i}\`;
  console.log(loopVar);
}

// console.log(loopVar); // ReferenceError!`,
      explanation: 'let creates new variables in each block scope, allowing you to reuse variable names safely.'
    },
    {
      title: 'Temporal Dead Zone Example',
      code: `function demonstrateTDZ() {
  // TDZ starts here for 'example'
  
  try {
    console.log(example); // This will throw an error
  } catch (error) {
    console.log("Error caught:", error.message);
  }
  
  let example = "Now I'm safe to use";
  console.log("After declaration:", example);
}

demonstrateTDZ();`,
      explanation: 'The Temporal Dead Zone prevents accessing let variables before they are declared, catching more bugs at runtime.'
    },
    {
      title: 'Perfect for Loop Variables',
      code: `// let creates new binding for each iteration
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("let in loop:", i); // 0, 1, 2
  }, 100);
}

// Works with other loop types too
const items = ['a', 'b', 'c'];
for (let item of items) {
  setTimeout(() => {
    console.log("Item:", item); // a, b, c
  }, 200);
}`,
      explanation: 'let solves the classic loop closure problem by creating a fresh variable binding for each iteration.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="The let Keyword"
        description="A modern way to declare variables with block scope. Introduced in ES6 to address the shortcomings of var."
        characteristics={[
          'Block-scoped (respects {} boundaries)',
          'Cannot be redeclared in same scope',
          'Has temporal dead zone',
          'Perfect for loop variables'
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

export default LetSection;