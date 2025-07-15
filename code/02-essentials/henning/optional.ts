/**
 * Optional values in TypeScript
 */

function generateError(msg?: string): never {
  throw new Error(msg);
}

type User = {
  id: number;
  name: string;
  role?: string; // Optional property
};

/**
 * Nullish coalescing operator
 * It provides a default value if the left-hand side is null or undefined.
 * This allows to distinguish between a value that is intentionally set to for example an empty string or zero, and a value that is not set at all.
 */

function getUserRole(user: User): string {
  return user.role ?? "Guest"; // If role is undefined, return "Guest"
}

// The `??` operator just checks for null or undefined, not falsy values like 0 or ""
