const axios = require('axios');

const createForm = async (url, payload) => {
  const forms = await axios.post(url, payload);
  return forms;
};
export default createForm;
