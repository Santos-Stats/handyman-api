import axios from 'axios';
export async function getRequest(url, header = null){
  try {
    const { data } = await axios.request
    ({
      method: 'GET',
      url: url,
      headers: header
    });
    return data;
  } catch (error) {
    return error;
  }
};
