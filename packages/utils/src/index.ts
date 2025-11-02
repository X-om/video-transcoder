/**
 * Shared utility functions
 */

export function greet(name: string): string {
  return `Hello, ${name}!`;
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}
