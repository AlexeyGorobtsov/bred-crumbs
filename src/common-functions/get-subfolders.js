export const getSubfolders = (dataFolders, path) => {
  console.log({ dataFolders, path });
  const acc = {
    breadCrumbsArray: []
  };
  const pathArray = String(path).split("/");
  const subfolders =  pathArray.reduce((acc, item) => {
    const { isFirstIteration } = acc;
    if (!isFirstIteration) {
      const [folders] = dataFolders.filter(current => current.id === item) || [];
      console.log({folders});

      acc.current = folders["child"];
      acc.breadCrumbsArray.push(folders);
      acc.isFirstIteration = true;

      return acc;
    }
    const [ folders ] = acc.current.filter(folders => folders.id === item) || [];
    acc.current = folders["child"];
    acc.breadCrumbsArray.push(folders);
    
    return acc;

  }, acc);

  return subfolders || {};

};