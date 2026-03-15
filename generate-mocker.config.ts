import { type Plugin, defineConfig } from 'vite';

import { fileURLToPath } from "node:url";

let mockerRuntimePath = fileURLToPath(
  import.meta.resolve("storybook/internal/mocking-utils/mocker-runtime") // using Storybook package for testing
)

const ENTRY_PATH = 'vite-inject-mocker-entry.js';

// const require = createRequire(import.meta.url);
// mockerRuntimePath = require.resolve("storybook/internal/mocking-utils/mocker-runtime");

function emitModuleFile(outputFilename: string): Plugin {
  return {
    name: 'emit-module-file',
    async buildStart() {
      try {
        this.emitFile({
          // type: 'asset',
          // fileName: outputFilename,
          // source: fs.readFileSync(mockerRuntimePath),
          type: 'chunk',
          id: mockerRuntimePath,
          fileName: outputFilename
        });
      } catch (e) {
        this.error(`Could not resolve or emit file for module id "storybook/internal/mocking-utils/mocker-runtime": ${e}`);
      }
    }
  };
}

export default defineConfig({
	plugins: [emitModuleFile(ENTRY_PATH)],
  build: {
    lib: {
      entry: ENTRY_PATH,
      name: 'test',
      formats: ['es', 'cjs']
    }
  }
});
