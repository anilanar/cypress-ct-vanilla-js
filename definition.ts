import { defineComponentFramework } from "cypress";

export default defineComponentFramework({
  type: "cypress-ct-vanilla-js",
  name: "Vanilla JS",
  supportedBundlers: ["vite", "webpack"],
  detectors: [],
  dependencies: (bundler) => {
    return [];
  },
});
