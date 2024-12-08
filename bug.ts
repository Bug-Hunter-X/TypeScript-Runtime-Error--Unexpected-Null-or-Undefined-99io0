function greet(person: string, date: Date): string {
  console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
  return `Hello, ${person}, today is ${date.toDateString()}!`;
}

greet("John Doe", new Date());
// This will compile and run without errors.

function greet2(person: string | null, date: Date): string {
  if (person === null) {
    return "Hello, world!";
  } else {
    console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
    return `Hello, ${person}, today is ${date.toDateString()}!`;
  }
}

greet2(null, new Date());
// This will compile and run without errors.

//However, this will fail, if greet2 does not check if person is null before calling console.log:

function greet3(person: string | null, date: Date): string {
    console.log(`Hello, ${person}, today is ${date.toDateString()}!`);
    return `Hello, ${person}, today is ${date.toDateString()}!`;
}

greet3(null, new Date());
// This will throw an error at runtime because of the potential null value.
//This is a common error because TypeScript does not always catch runtime errors related to null or undefined values.