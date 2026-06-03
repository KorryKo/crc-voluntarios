// Let TypeScript know about side-effect CSS imports (e.g. `import "./globals.css"`).
// Next.js bundles these via its own pipeline; this only silences editor error TS2882.
declare module "*.css";
