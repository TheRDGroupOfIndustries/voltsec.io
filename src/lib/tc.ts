export const TC = async (fn: (params: any) => any, params: any) => {
  try {
    return await fn(params);
  } catch (error) {
    console.error(error);
    return null;
  }
};
