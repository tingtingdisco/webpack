export const entry2 = async () => {
  const b = await import(/* webpackChunkName: "B" */ './modules/b');
  const c = await import(/* webpackChunkName: "C" */ './modules/c');
  b();
  c();
};
