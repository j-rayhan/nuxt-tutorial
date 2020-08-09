export default (context) => {
  console.log('PRINT IN %s=====>', 'Auth check', context.req)
  // ToDo remove condition
  if (process.client) context.store.dispatch('initAuth', context.req)
}
