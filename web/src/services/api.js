const getDataProjects = async () => {
  const fetchData = await fetch(
    'https://proyectos-molones-las-hierbas.onrender.com/'
  );
  const dataJson = await fetchData.json();
  return dataJson;
};
const object = {
  getDataProjects: getDataProjects,
};

export default object;
