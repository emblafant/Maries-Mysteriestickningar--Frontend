export const parseString = (str:string) => {
  const splitStr = str.split(/[\s-]+/);
  for (let i = 0; i < splitStr.length; i++) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase()  + splitStr[i].slice(1);
  }
  return splitStr.join(" ");
}