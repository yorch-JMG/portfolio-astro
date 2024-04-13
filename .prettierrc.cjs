module.exports = {
    printWidth: 80,
    semi: false,
    singleQuote: true,
    jsxSingleQuote: true,
    tabWidth: 4,
    trailingComma: 'none',
    useTabs: true,
    overrides: [
        {
            files: ['*.json', '*.md', '*.toml', '*.yml'],
            options: {
                useTabs: false
            }
        }
    ],
    endOfLine: 'lf'
};