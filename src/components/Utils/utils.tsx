const getProdURL = (name: string) => {
  const filename = new URL(`../../assets/Converted/${name}`, import.meta.url)
    .href;
  return filename;
};

const getFooterURL = (name: string) => {
  const filename = new URL(`../../assets/SVGs/${name}`, import.meta.url).href;
  return filename;
};

export { getProdURL, getFooterURL };
