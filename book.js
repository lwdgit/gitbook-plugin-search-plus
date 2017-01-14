var pkg = require('./package.json');

module.exports = {
    // Documentation for GitBook is stored under "docs"
    root: './content',
    output: './book',
    title: 'test search plus plugin',
    plugins: ['-lunr', '-search','search-plus','fontsettings'],

    variables: {
        version: pkg.version
    }
};
