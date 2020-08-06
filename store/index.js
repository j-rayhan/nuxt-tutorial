import Vuex from 'vuex'
import axios from 'axios'

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
        // eslint-disable-next-line
        // console.log('PRINT IN %s=====>', 'init', process)
        return axios
          .get('https://nuxt-blog-85400.firebaseio.com/posts.json')
          .then(({ data }) => {
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
        return axios
          .post(process.env.baseUrl + '/posts.json', post)
          .then((res) => {
            vuexContext.commit('addPost', { ...post, id: res.data.name })
          })
          .catch((e) => console.error('ERROR***', e))
      },
      editPost(vuexContext, post) {
        return axios
          .put(process.env.baseUrl + '/posts/' + post.id + '.json', post)
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
