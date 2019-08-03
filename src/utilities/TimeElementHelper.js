export const formatTimeElement = element => {
  if (element < 10) {
    return `0${element}`;
  } else {
    return `${element}`;
  }
};
