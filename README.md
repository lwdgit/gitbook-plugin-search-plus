# gitbook-search-plus

This plugin is a powerful search plugin for GitBook, it adds an interactive search bar to your book

This plugin can search `any text` in your gitbook document.

![](./examples/search.gif)

### Use this plugin

 Before use this plugin, you should disable the default search plugin first, 
 Here is a `book.json` configuration example:

```
{
    plugins: ["-search", "search-plus"]
}
```

> Note: Only gitbook >= 3.0.0 support

### Examples

```
    > git clone git@github.com:lwdgit/gitbook-plugin-search-plus.git
    > cd gitbook-plugin-search-plus/examples
    > npm install
    > npm start
```
And then open http://127.0.0.1:4000

### Thanks To:

* [gitbook-plugin-lunr](https://github.com/GitbookIO/plugin-lunr)
* [gitbook-plugin-search](https://github.com/GitbookIO/plugin-search)

