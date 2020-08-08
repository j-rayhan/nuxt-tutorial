import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, post) {
        const postIndex = state.loadedPosts.findIndex((p) => p.id === post.id)
        state.loadedPosts[postIndex] = post
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          // eslint-disable-next-line
          // console.log('PRINT IN %s=====>', 'process', context)
        }
        return this.$axios
          .$get('/posts.json')
          .then((res) => {
            const data = res
            const posts = []
            for (const key in data) {
              const element = data[key]
              posts.push({ ...element, id: key })
            }
            vuexContext.commit('setPosts', posts)
          })
          .catch((e) => console.error('ERROR***', e))
      },
      addPost(vuexContext, post) {
        return this.$axios
          .$post('/posts.json', post)
          .then((res) => {
            console.log('PRINT IN %s=====>', 'Index', res)
            vuexContext.commit('addPost', { ...post, id: res.name })
          })
          .catch((e) => console.error('ERROR***', e))
      },
      editPost(vuexContext, post) {
        return this.$axios
          .$put('/posts/' + post.id + '.json', post)
          .then((res) => {
            vuexContext.commit('editPost', post)
          })
          .catch((e) => console.error('ERROR***', e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore
