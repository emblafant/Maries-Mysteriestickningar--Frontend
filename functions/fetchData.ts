export const fetchData = async (url:string) => {
  const results = await fetch(url);
  const json = await results.json();
  return(json.data)
}