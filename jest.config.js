module.exports = {
    testEnvironment: 'node',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: [
      '/node_modules/',
      '\\.pnp\\.[^\\/]+$',
    ],
    testMatch: [
      '**/__tests__/**/*.ts?(x)',
      '**/?(*.)+(spec|test).ts?(x)',
    ],
    moduleFileExtensions: [
      'ts',
      'tsx',
      'js',
      'jsx',
      'json',
      'node',
    ],




  };
  