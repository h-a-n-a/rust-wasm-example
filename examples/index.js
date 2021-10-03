import init, { greet } from "../pkg/rust_wasm_example.js"

await init();
greet("hello from JavaScript!")
