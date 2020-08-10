import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null
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
      }
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
          .catch((e) => {
            // eslint-disable-next-line
            console.error('ERROR***', e)
          })
      },
      addPost(vuexContext, post) {
        return this.$axios
          .$post('/posts.json?auth=' + vuexContext.state.token, post)
          .then((res) => {
            vuexContext.commit('addPost', { ...post, id: res.name })
          })
          .catch((e) => {
            // eslint-disable-next-line
            console.error('ERROR***', e)
          })
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
          .catch((e) => {
            // eslint-disable-next-line
            console.error('ERROR***', e)
          })
      },
      authenticateUser(vuexContext, authData) {
        const authURL = `https://identitytoolkit.googleapis.com/v1/accounts:${
          authData.isLogin ? 'signInWithPassword' : 'signUp'
        }?key=${process.env.fbAPIKEY}`
        return this.$axios
          .$post(authURL, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
          })
          .then((res) => {
            vuexContext.commit('setToken', res.idToken)
            localStorage.setItem('token', res.idToken)
            localStorage.setItem(
              'logoutTime',
              new Date().getTime() + Number.parseInt(res.expiresIn) * 1000
            )

            Cookie.set('jwt', res.idToken)
            Cookie.set(
              'logoutTime',
              new Date().getTime() + +res.expiresIn * 1000
            )
            return this.$axios.$post('http://localhost:3000/api/store-data', {
              data: 'Test server middleware'
            })
          })
          .catch((e) => {
            // eslint-disable-next-line
            console.error('ERROR***', e)
          })
      },
      initAuth(vuexContext, req) {
        let token, logoutTime

        if (req) {
          if (!req.headers.cookie) return

          token = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('jwt='))
            .split('=')[1]
          logoutTime = req.headers.cookie
            .split(';')
            .find((c) => c.trim().startsWith('logoutTime='))
            .split('=')[1]
        } else if (process.client) {
          token = localStorage.getItem('token')
          logoutTime = localStorage.getItem('logoutTime')
        }

        if (new Date().getTime() > +logoutTime || !token) {
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('setToken', token)
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      logout(vuexContext) {
        vuexContext.commit('clearToken')
        Cookie.remove('jwt')
        Cookie.remove('logoutTime')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('logoutTime')
        }
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token !== null
      }
    }
  })
}

export default createStore
