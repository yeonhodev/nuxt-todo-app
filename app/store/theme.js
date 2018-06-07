export const state = () => ({
  themes: ['default', 'dark'],
  theme: 'default'
})

export const getters = {
  GET_THEME: state => {
    return state.theme
  }
}

export const mutations = {
  SET_THEME(state, { theme }) {
    if (state.themes.indexOf(theme) !== -1) {
      state.theme = theme
      localStorage.setItem('theme', theme)
    }
  }
}

export const actions = {}
