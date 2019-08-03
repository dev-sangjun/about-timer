export const formatTimeElement = element => {
  const integer = parseInt(element);
  if (element < 10) {
    return `0${integer}`;
  } else {
    return `${integer}`;
  }
};
