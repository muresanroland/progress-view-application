export const updateElementInArray = (element: any, array: Array<any>) => {
  const foundIndex = array.findIndex(x => x.id === element.id);
  array[foundIndex] = element;
  return [...array];
};
