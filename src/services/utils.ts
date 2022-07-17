// Función currificada que hace bloque try/catch en las peticiones HTTP
// para evitar repetirlo en cada función
export const catchAsync =
  (fn: any) =>
  async (...args: any) => {
    try {
      const result = await fn(...args);
      return result.data;
    } catch (error: any) {
      console.info('> catchAsync: ', error.message);
      return false;
    }
  };
