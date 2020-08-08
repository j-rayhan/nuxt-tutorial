export default (context) => {
  console.log('PRINT IN %s=====>', 'Auth middleware')
  if (!context.store.getters.isAuthenticated) context.redirect('/admin/auth')
}
