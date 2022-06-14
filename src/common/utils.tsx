export const withLabel = (Component: any) => (label: string) => {
  console.time(label);
  return Component;
};
