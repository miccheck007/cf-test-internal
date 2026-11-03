export default {
  // Binding names only (never values): shows which KV and secrets this version got.
  fetch: (_req, env) => new Response(`Internal - OK - 10 | bindings: ${Object.keys(env).sort().join(", ")}`),
};
