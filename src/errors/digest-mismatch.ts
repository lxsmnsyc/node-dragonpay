export default class DigestMismatchError extends Error {
  constructor(method: string, expected: string, received: string) {
    super(`
  Digest mismatch for method ${method}.
  Expected: ${expected}
  Received: ${received}
    `);
  }
}
