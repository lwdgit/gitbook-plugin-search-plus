var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './docs',
    title: 'test search plus plugin',
    // Use the "official" theme
    plugins: ['-lunr', '-search','search-plus'],

    variables: {
        version: pkg.version
    }
};
