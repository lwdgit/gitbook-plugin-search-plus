# gitbook-search-plus

This plugin is a powerful search plugin for GitBook, it adds an interactive search bar to your book

This plugin can search `any text` in your gitbook document & `do not need backend server`.

![](./search.gif)

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

Open https://lwdgit.github.io/gitbook-plugin-search-plus/ or test it by yourself

```
    > git clone git@github.com:lwdgit/gitbook-plugin-search-plus.git -b gh-pages
    > cd gitbook-plugin-search-plus
    > npm install
    > npm start
```

And then open http://127.0.0.1:4000

### Thanks To:

* [gitbook-plugin-lunr](https://github.com/GitbookIO/plugin-lunr)
* [gitbook-plugin-search](https://github.com/GitbookIO/plugin-search)

