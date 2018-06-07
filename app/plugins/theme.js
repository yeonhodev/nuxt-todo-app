export default ({ store, query }) => {
  const { theme } = query

  if (theme) store.commit('theme/SET_THEME', { theme })

  const savedTheme = localStorage.getItem('theme') || store.getters['theme/GET_THEME']

  if (savedTheme === 'dark') {
    document.body.classList.add('theme-dark')
  }
}
