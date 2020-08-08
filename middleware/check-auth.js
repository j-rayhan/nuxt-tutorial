export default (context) => {
  console.log('PRINT IN %s=====>', 'Auth check')
  if (process.client) context.store.dispatch('initAuth')
}
