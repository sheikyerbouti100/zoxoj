import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const LoopsSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic for Loop',
      code: `// Classic for loop structure
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i}\`);
}

// Counting backwards
for (let i = 10; i >= 0; i--) {
  console.log(\`Countdown: \${i}\`);
}

// Custom increment
for (let i = 0; i <= 20; i += 5) {
  console.log(\`Step: \${i}\`);
}`,
      explanation: 'The for loop has three parts: initialization, condition, and increment. Perfect for when you know how many iterations you need.'
    },
    {
      title: 'for...of Loop (Arrays and Iterables)',
      code: `const fruits = ['apple', 'banana', 'orange'];

// Iterate over array values
for (const fruit of fruits) {
  console.log(\`I like \${fruit}\`);
}

// Works with strings too
const word = "hello";
for (const char of word) {
  console.log(\`Character: \${char}\`);
}

// With index using entries()
for (const [index, fruit] of fruits.entries()) {
  console.log(\`\${index}: \${fruit}\`);
}`,
      explanation: 'for...of iterates over iterable objects like arrays and strings, giving you direct access to values.'
    },
    {
      title: 'for...in Loop (Object Properties)',
      code: `const person = {
  name: 'Alice',
  age: 30,
  job: 'Developer'
};

// Iterate over object keys
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Works with arrays too (but not recommended)
const colors = ['red', 'green', 'blue'];
for (const index in colors) {
  console.log(\`Index \${index}: \${colors[index]}\`);
}

// Better to use Object methods
console.log('\\nUsing Object.entries():');
for (const [key, value] of Object.entries(person)) {
  console.log(\`\${key}: \${value}\`);
}`,
      explanation: 'for...in iterates over enumerable properties of objects. Use Object.entries() for cleaner object iteration.'
    },
    {
      title: 'while Loop',
      code: `let count = 0;

// Basic while loop
while (count < 3) {
  console.log(\`Count is: \${count}\`);
  count++;
}

// While with condition checking
let userInput = "";
let attempts = 0;
const maxAttempts = 3;

while (userInput !== "quit" && attempts < maxAttempts) {
  userInput = attempts === 0 ? "start" : attempts === 1 ? "continue" : "quit";
  console.log(\`Attempt \${attempts + 1}: \${userInput}\`);
  attempts++;
}

console.log("Loop finished");`,
      explanation: 'while loops continue as long as the condition is true. Great when you don\'t know the exact number of iterations needed.'
    },
    {
      title: 'do...while Loop',
      code: `let number = 0;

// Executes at least once
do {
  console.log(\`Number is: \${number}\`);
  number++;
} while (number < 3);

// Example: Input validation simulation
let password = "";
let isValid = false;

do {
  // Simulate getting password input
  password = "weak"; // First attempt
  if (password.length >= 8) {
    isValid = true;
    console.log("Password accepted!");
  } else {
    console.log("Password too short, try again");
    password = "strongPassword123"; // Second attempt
    isValid = password.length >= 8;
  }
} while (!isValid);

console.log("Login successful!");`,
      explanation: 'do...while executes the code block at least once before checking the condition. Useful for input validation.'
    },
    {
      title: 'Loop Control: break and continue',
      code: `// Using break to exit early
console.log("Finding first even number:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(\`Found even number: \${i}\`);
    break; // Exit the loop
  }
  console.log(\`\${i} is odd, continuing...\`);
}

console.log("\\nSkipping odd numbers with continue:");
for (let i = 1; i <= 6; i++) {
  if (i % 2 !== 0) {
    continue; // Skip to next iteration
  }
  console.log(\`Even number: \${i}\`);
}

// Nested loops with labeled break
outer: for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log("Breaking out of both loops");
      break outer;
    }
    console.log(\`i: \${i}, j: \${j}\`);
  }
}`,
      explanation: 'Use break to exit loops early and continue to skip to the next iteration. Labels help control nested loops.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="Loop Commands"
        description="Control repetitive execution of code blocks. Essential for processing collections, implementing algorithms, and automating repetitive tasks."
        characteristics={[
          'for loops are ideal when you know the iteration count',
          'while loops continue based on conditions',
          'do...while executes at least once before checking condition',
          'for...of iterates over values, for...in iterates over keys'
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

export default LoopsSection;