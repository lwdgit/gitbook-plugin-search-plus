var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './content',
    title: 'test search plus plugin',
    plugins: ['-lunr', '-search','search-plus'],

    variables: {
        version: pkg.version
    }
};
