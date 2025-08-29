import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const ConditionalsSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic if Statement',
      code: `const age = 18;
const temperature = 75;

if (age >= 18) {
  console.log("You are an adult!");
}

if (temperature > 80) {
  console.log("It's hot outside!");
} else {
  console.log("Temperature is comfortable");
}`,
      explanation: 'The if statement executes code only when a condition is true. Use else for alternative actions.'
    },
    {
      title: 'if-else if-else Chain',
      code: `const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
  console.log("Excellent work!");
} else if (score >= 80) {
  grade = "B";
  console.log("Good job!");
} else if (score >= 70) {
  grade = "C";
  console.log("You passed!");
} else if (score >= 60) {
  grade = "D";
  console.log("You barely passed");
} else {
  grade = "F";
  console.log("You need to study more");
}

console.log(\`Your grade is: \${grade}\`);`,
      explanation: 'Use else if to check multiple conditions in sequence. Only the first true condition will execute.'
    },
    {
      title: 'Nested Conditionals',
      code: `const weather = "sunny";
const temperature = 72;
const hasUmbrella = true;

if (weather === "sunny") {
  if (temperature > 70) {
    console.log("Perfect day for a picnic!");
  } else {
    console.log("Sunny but a bit chilly");
  }
} else if (weather === "rainy") {
  if (hasUmbrella) {
    console.log("You're prepared for the rain!");
  } else {
    console.log("You might get wet!");
  }
} else {
  console.log("Check the weather forecast");
}`,
      explanation: 'Nest conditionals to check multiple related conditions. Keep nesting shallow for readability.'
    },
    {
      title: 'Truthy and Falsy Values',
      code: `// Falsy values in JavaScript
const falsyValues = [false, 0, "", null, undefined, NaN];

falsyValues.forEach(value => {
  if (value) {
    console.log(\`\${value} is truthy\`);
  } else {
    console.log(\`\${value} is falsy\`);
  }
});

// Truthy examples
const truthyValues = [true, 1, "hello", [], {}, "0"];

console.log("\\nTruthy values:");
truthyValues.forEach(value => {
  if (value) {
    console.log(\`\${JSON.stringify(value)} is truthy\`);
  }
});`,
      explanation: 'JavaScript has specific falsy values. Everything else is truthy, including empty arrays and objects.'
    },
    {
      title: 'Logical Operators in Conditions',
      code: `const username = "alice";
const password = "secret123";
const isLoggedIn = false;
const age = 25;

// AND operator (&&)
if (username === "alice" && password === "secret123") {
  console.log("Login successful!");
}

// OR operator (||)
if (age < 13 || age > 65) {
  console.log("Eligible for discount");
} else {
  console.log("Regular pricing applies");
}

// NOT operator (!)
if (!isLoggedIn) {
  console.log("Please log in to continue");
}

// Complex conditions
if ((age >= 18 && age <= 65) && (username && password)) {
  console.log("Full access granted");
}`,
      explanation: 'Combine conditions using logical operators: && (AND), || (OR), and ! (NOT) for complex logic.'
    },
    {
      title: 'Ternary Operator (Conditional Expression)',
      code: `const hour = 14;
const isWeekend = false;
const balance = 150;

// Basic ternary
const greeting = hour < 12 ? "Good morning!" : "Good afternoon!";
console.log(greeting);

// Nested ternary (use sparingly)
const status = isWeekend 
  ? "Relaxing" 
  : hour < 9 
    ? "Getting ready for work" 
    : "At work";
console.log(\`Status: \${status}\`);

// Ternary for assignments
const canPurchase = balance >= 100 ? true : false;
console.log(\`Can purchase: \${canPurchase}\`);

// Ternary in function calls
console.log(balance >= 100 ? "Purchase approved" : "Insufficient funds");`,
      explanation: 'The ternary operator (condition ? value1 : value2) is a concise way to write simple if-else statements.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="Conditional Statements"
        description="Control the flow of your program by executing different code based on conditions. Essential for creating dynamic, responsive applications."
        characteristics={[
          'if statements execute code when conditions are true',
          'else provides alternative execution paths',
          'else if allows multiple condition checking',
          'Supports logical operators (&&, ||, !) for complex conditions'
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

export default ConditionalsSection;