export default {
    preset: 'ts-jest',
    testMatch: ['**/*.test.ts'],
    moduleNameMapper: {
        '^(\\.\\.?\\/.+)\\.js$': '$1',
    },
};