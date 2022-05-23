const data: Array<any> = [];
export const apiCall = (method: string = 'GET', url?: string, error?: string) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error);
      }
      resolve(data);
    }, 1000);
  });
