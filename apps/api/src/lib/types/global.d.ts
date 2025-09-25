declare global {
  var __test_meta__: Record<string, any>;

  // biome-ignore lint/nursery/useConsistentTypeDefinitions: ignore
  interface String {
    trimAll(): string;
  }
}

export {};
