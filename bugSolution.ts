function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
  return `Hello, ${person}, today is ${date.toDateString()}!`;
}

greet("John Doe", new Date());

function greet2(person: string | null, date: Date): string {
  if (person === null) {
    return "Hello, world!";
  } else {
    console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
    return `Hello, ${person}, today is ${date.toDateString()}!`;
  }
}

greet2(null, new Date());

function greet3(person: string | null, date: Date): string {
  if (person) {
    console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
    return `Hello, ${person}, today is ${date.toDateString()}!`;
  } else {
    return "Hello, world!";
  }
}

greet3(null, new Date());