const axios = require('axios');

const getForms = async (url) => {
  const forms = await axios.get(url);
  return forms;
};
export default getForms;
