const getProdURL = (name: string) => {
  const filename = new URL(`../../assets/Products/${name}`, import.meta.url)
    .href;
  return filename;
};

export { getProdURL };
