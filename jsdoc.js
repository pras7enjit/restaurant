{
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc","closure"]
    },
    "source": {
        "includePattern": ".+\\.js(doc)?$",
        "excludePattern": "(^|\\/|\\\\)_"
    },
    "plugins": [
        "plugins/markdown",
        "plugins/summarize"
    ],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}