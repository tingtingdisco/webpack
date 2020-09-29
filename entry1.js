export const entry1 = async () => {
  const a = await import(/* webpackChunkName: "A" */ './modules/a');
  const b = await import(/* webpackChunkName: "B" */ './modules/b');
  a();
  b();
};
