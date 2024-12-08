# TypeScript Runtime Error: Unexpected Null or Undefined

This repository demonstrates a common issue in TypeScript where the compiler doesn't catch potential runtime errors involving null or undefined values.  Even though TypeScript's type system is strong, it doesn't guarantee complete runtime safety.  This example shows how a seemingly type-safe function can still throw a runtime error if not properly handling null or undefined values.

## The Bug

The `greet3` function in `bug.ts` doesn't handle the possibility of the `person` parameter being null. This leads to a runtime error if a null value is passed.  This is tricky because the function compiles without errors, giving a false sense of security.

## The Solution

The solution, in `bugSolution.ts`, is to add a null check before attempting to access properties of the `person` parameter.  This ensures that the code only attempts to use the `person` variable if it's not null.