// Polyfill for window.fetch
require('whatwg-fetch')

export const state = () => ({})

export const getters = () => {}

export const mutations = {}

export const actions = {
  // This method will be called when user route "location.href" & "nuxt-link"
  async nuxtServerInit({ commit }, { app, query }) {
    try {
      console.log('nuxt server init.')
    } catch (err) {
      console.log('nuxtServerInit Error\n')
    }
  }
}
