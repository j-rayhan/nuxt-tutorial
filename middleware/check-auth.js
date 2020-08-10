export default (context) => {
  context.store.dispatch('initAuth', context.req)
}
