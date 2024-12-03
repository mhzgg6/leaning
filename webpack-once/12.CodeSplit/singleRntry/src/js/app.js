export const app = (...args) => {
  return args.reduce((p, c) => p + c, 0);
};