export const state = () => ({
  name : 'Aung Paing Soe',
  list : []
})

export const getters = {
  getName (state) {
    return state.name
  }
}

export const mutations = {
  add (state,data) {
    state.list.push(data)
  },
  changeName (state,name) {
    state.name = name
  }
}

export const actions = {
  alert (state,data) {
    window.alert(data)
  }
}
