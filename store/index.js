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

        // cosnt data = new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit('setPosts', [
        //       {
        //         id: '1',
        //         title: 'Post title 1',
        //         previewText: 'Preview text 1',
        //         thumbnail:
        //           'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
        //       },
        //       {
        //         id: '2',
        //         title: 'Post title 2',
        //         previewText: 'Preview text 18',
        //         thumbnail:
        //           'https://c4.wallpaperflare.com/wallpaper/286/1013/130/simple-background-blue-gradient-wallpaper-preview.jpg',
        //       },
        //       {
        //         id: '3',
        //         title: 'Post title 3',
        //         previewText: 'Preview text 15',
        //         thumbnail:
        //           'https://c4.wallpaperflare.com/wallpaper/286/1013/130/simple-background-blue-gradient-wallpaper-preview.jpg',
        //       },
        //       {
        //         id: '4',
        //         title: 'Post title 4',
        //         previewText: 'Preview text 12',
        //         thumbnail:
        //           'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        //       },
        //       {
        //         id: '5',
        //         title: 'Second Post',
        //         previewText: 'This is our second post!',
        //         thumbnail:
        //           'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg',
        //       },
        //     ])
        //     resolve()
        //   }, 1000)
        // })
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
