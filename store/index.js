import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
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
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
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
          .$post('/posts.json?auth=' + vuexContext.state.token, post)
          .then((res) => {
            vuexContext.commit('addPost', { ...post, id: res.name })
          })
          .catch((e) => console.error('ERROR***', e))
      },
      editPost(vuexContext, post) {
        return this.$axios
          .$put(
            '/posts/' + post.id + '.json?auth=' + vuexContext.state.token,
            post
          )
          .then((res) => {
            vuexContext.commit('editPost', post)
          })
          .catch((e) => console.error('ERROR***', e))
      },
      authenticateUser(vuexContext, authData) {
        const authURL = `https://identitytoolkit.googleapis.com/v1/accounts:${
          authData.isLogin ? 'signInWithPassword' : 'signUp'
        }?key=${process.env.fbAPIKEY}`
        return this.$axios
          .$post(authURL, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((res) => {
            vuexContext.commit('setToken', res.idToken)
            vuexContext.dispatch('setLogoutTimer', res.expiresIn * 1000)
            localStorage.setItem('token', res.idToken)
            localStorage.setItem(
              'logoutTime',
              new Date().getTime() + res.expiresIn * 1000
            )
          })
          .catch((e) => console.error('PRINT IN %s=====>', 'auth error', e))
      },
      setLogoutTimer(vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duration)
      },
      initAuth(vuexContext) {
        const token = localStorage.getItem('token')
        const logoutTime = localStorage.getItem('logoutTime')

        if (new Date().getTime() > +logoutTime || !token) return
        vuexContext.dispatch(
          'setLogoutTimer',
          +logoutTime - new Date().getTime()
        )
        vuexContext.commit('setToken', token)
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token !== null
      },
    },
  })
}

export default createStore
