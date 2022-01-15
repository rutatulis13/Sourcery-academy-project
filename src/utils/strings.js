const getUrlWithoutProtocol = (url) => {
  let result = url;
  if (url && typeof url == "string") {
    result = url.replace(/(^\w+:|^)\/\//, "");
  }
  return result;
};

export { getUrlWithoutProtocol };
