import React from 'react';
import CodeExample from './CodeExample';
import ConceptCard from './ConceptCard';

const ReturnSection: React.FC = () => {
  const examples = [
    {
      title: 'Basic Return Statement',
      code: `// Function with return value
function add(a, b) {
  return a + b;
}

console.log("5 + 3 =", add(5, 3));

// Function without return (returns undefined)
function greet(name) {
  console.log("Hello, " + name);
  // No return statement = returns undefined
}

const result = greet("Alice");
console.log("Return value:", result);

// Explicit return undefined
function doNothing() {
  return undefined;
}

console.log("Explicit undefined:", doNothing());`,
      explanation: 'Return statements send values back to the caller. Functions without return statements automatically return undefined.'
    },
    {
      title: 'Early Return for Control Flow',
      code: `function checkAge(age) {
  // Early return for invalid input
  if (age < 0) {
    return "Invalid age";
  }
  
  // Early return for special cases
  if (age < 13) {
    return "Child";
  }
  
  if (age < 20) {
    return "Teenager";
  }
  
  if (age < 65) {
    return "Adult";
  }
  
  return "Senior";
}

console.log("Age 10:", checkAge(10));
console.log("Age 25:", checkAge(25));
console.log("Age -5:", checkAge(-5));
console.log("Age 70:", checkAge(70));`,
      explanation: 'Early returns help avoid deeply nested if-else statements and make code more readable by handling edge cases first.'
    },
    {
      title: 'Return in Different Function Types',
      code: `// Function declaration
function multiply(x, y) {
  return x * y;
}

// Function expression
const divide = function(x, y) {
  if (y === 0) {
    return "Cannot divide by zero";
  }
  return x / y;
};

// Arrow function with explicit return
const square = (x) => {
  return x * x;
};

// Arrow function with implicit return
const cube = x => x * x * x;

// Arrow function with object return (needs parentheses)
const createUser = (name, age) => ({
  name: name,
  age: age,
  id: Math.random()
});

console.log("Multiply:", multiply(4, 5));
console.log("Divide:", divide(10, 2));
console.log("Square:", square(6));
console.log("Cube:", cube(3));
console.log("User:", createUser("Bob", 30));`,
      explanation: 'Different function types handle return statements differently. Arrow functions can have implicit returns for single expressions.'
    },
    {
      title: 'Return Multiple Values',
      code: `// Return array for multiple values
function getNameParts(fullName) {
  const parts = fullName.split(" ");
  return [parts[0], parts[parts.length - 1]];
}

const [firstName, lastName] = getNameParts("John Doe Smith");
console.log("First:", firstName, "Last:", lastName);

// Return object for named values
function getCircleInfo(radius) {
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  
  return {
    radius: radius,
    area: area.toFixed(2),
    circumference: circumference.toFixed(2)
  };
}

const circle = getCircleInfo(5);
console.log("Circle info:", circle);

// Destructuring object return
const { area, circumference } = getCircleInfo(3);
console.log(\`Area: \${area}, Circumference: \${circumference}\`);`,
      explanation: 'Return arrays or objects to send multiple values back. Use destructuring to extract specific values from the return.'
    },
    {
      title: 'Return in Loops and Conditionals',
      code: `// Return breaks out of function immediately
function findFirstEven(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(\`Checking: \${numbers[i]}\`);
    
    if (numbers[i] % 2 === 0) {
      return numbers[i]; // Exits function immediately
    }
  }
  
  return null; // No even number found
}

const nums = [1, 3, 7, 8, 9, 12];
console.log("First even:", findFirstEven(nums));

// Return in nested conditions
function processUser(user) {
  if (!user) {
    return { error: "No user provided" };
  }
  
  if (!user.name) {
    return { error: "Name is required" };
  }
  
  if (user.age < 0) {
    return { error: "Invalid age" };
  }
  
  return { 
    success: true, 
    message: \`Welcome, \${user.name}!\`,
    user: user
  };
}

console.log("Valid user:", processUser({ name: "Alice", age: 25 }));
console.log("Invalid user:", processUser({ age: -5 }));`,
      explanation: 'Return statements immediately exit the function, stopping any remaining code execution including loops.'
    },
    {
      title: 'Return with Async Functions',
      code: `// Regular async function
async function fetchUserData(id) {
  if (id <= 0) {
    return { error: "Invalid user ID" };
  }
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    id: id,
    name: \`User \${id}\`,
    email: \`user\${id}@example.com\`
  };
}

// Arrow async function
const processData = async (data) => {
  if (!data) {
    return null;
  }
  
  // Simulate processing
  await new Promise(resolve => setTimeout(resolve, 50));
  
  return data.toUpperCase();
};

// Using async functions
fetchUserData(1).then(user => {
  console.log("Fetched user:", user);
});

processData("hello world").then(result => {
  console.log("Processed:", result);
});

// Return Promise directly
function quickPromise(value) {
  return Promise.resolve(\`Quick: \${value}\`);
}

quickPromise("test").then(console.log);`,
      explanation: 'Async functions always return promises. The return value is automatically wrapped in a resolved promise.'
    }
  ];

  return (
    <div className="space-y-8">
      <ConceptCard
        title="Return Statement"
        description="Control function output and execution flow by returning values to the caller. Essential for creating reusable functions that produce results and communicate success or failure."
        characteristics={[
          'Immediately exits the function and returns control to caller',
          'Functions without return automatically return undefined',
          'Can return any JavaScript value: primitives, objects, arrays, functions',
          'Arrow functions support implicit returns for single expressions'
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

export default ReturnSection;