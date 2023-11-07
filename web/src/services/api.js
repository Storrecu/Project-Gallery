const getDataProjects = async () => {
  const fetchData = await fetch('http://localhost:2002/project');
  const dataJson = await fetchData.json();
  return dataJson;
};
const object = {
  getDataProjects: getDataProjects,
};

export default object;
