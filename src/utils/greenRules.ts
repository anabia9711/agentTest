export function applyGreenITRules(prompt: string, fileType: string): string {
  const rules: Record<string, string> = {
    javascript: "Avoid nested loops, prefer map/filter, minimize DOM access.",
    python: "Use list comprehensions, avoid global variables, prefer generators.",
    typescript: "Use strict types, avoid any, prefer functional components.",
    java: "Use efficient data structures, avoid unnecessary object creation.",
    csharp: "Use async/await properly, minimize memory allocations.",
    ruby: "Avoid monkey patching, prefer lazy evaluation.",
    go: "Use goroutines efficiently, avoid blocking operations.",
    rust: "Prefer zero-cost abstractions, minimize heap allocations.",
    php: "Avoid excessive server-side loops, cache results where possible.",
    kotlin: "Use immutable data structures, avoid blocking coroutines.",
    swift: "Use value types where possible, avoid retain cycles."
  };

  const rule = rules[fileType] || "Follow energy-efficient coding practices.";
  return `Rewrite this prompt with Green IT rules: ${rule}
Original Prompt: ${prompt}`;
}