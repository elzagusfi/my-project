// jest.config.js
module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
      "\\.(css|less|scss)$": "identity-obj-proxy",
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  };