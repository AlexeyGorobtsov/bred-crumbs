module.exports = [
    {
        id: "test",
        label: "root_dir",
        type: "dir",
        child: [
            {
                id: "main-file",
                label: "root.jx",
                type: "file",
                child: null
            },
            {
                id: "first-file",
                label: "first-example",
                type: "file",
                child: null
            }
        ]
    },
    {
        id: "second_dir",
        label: "second dir",
        type: "dir",
        child: [
            {
                id: "second-file",
                label: "second.json",
                type: "file",
                child: null
            },
            {
                id: "second-child-js",
                label: "second-child.js",
                type: "file",
                child: null
            }
        ]
    },
    {
        id: "third-file",
        label: "third-file.html",
        type: "file",
        child: null
    }
];