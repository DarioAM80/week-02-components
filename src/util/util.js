export const sendRequest = async (url, options, setErrorMessage) => {
  try {
    const resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error(resolve);
    }
    return resp;
  } catch (error) {
    console.log(error.message);
    setErrorMessage(error.message);
  }
};

export const encodeUrl = (sortField, sortDirection) => {
  let sortQuery = `sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`;
  const newURL = encodeURI(`${url}?${sortQuery}`);
  console.log(newURL);
  return newURL;
};
