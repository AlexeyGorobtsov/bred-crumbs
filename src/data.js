module.exports = [
  {
    id: "root_dir",
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
        id: "first-dir",
        label: "first-example",
        type: "dir",
        child: null
      },
      {
        id: "new folder",
        label: "new folder",
        type: "dir",
        child: [
          {
            id: "inner folder",
            label: "inner folder",
            type: "dir",
            child: null
          }
        ]
      }
    ]
  },
  {
    id: "root",
    label: "root_dir",
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
    id: "root_second",
    label: "root",
    type: "dir",
    child: null
  },
  {
    id: "third-file",
    label: "third-file.html",
    type: "file",
    child: null
  }
];