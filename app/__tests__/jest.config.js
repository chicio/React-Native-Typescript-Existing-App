module.exports = {
    'preset': 'react-native',
    'moduleFileExtensions': [
        'ts',
        'tsx',
        'js',
    ],
    'rootDir': '../..',
    'transform': {
        '^.+\\.(js)$': '<rootDir>/node_modules/babel-jest',
        '\\.(ts|tsx)$': '<rootDir>/node_modules/ts-jest/preprocessor.js',
    },
    'testMatch': ['**/__tests__/**/*.(ts|tsx|js|jsx)?(x)', '**/?(*.)(spec|test).(ts|tsx|js|jsx)?(x)'],
    'testPathIgnorePatterns': [
        '\\.snap$',
        '<rootDir>/node_modules/',
        'jest.config.js',
    ],
    'moduleDirectories': [
        'node_modules',
        '../',
    ],
};
