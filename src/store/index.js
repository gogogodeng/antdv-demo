import { createStore } from 'vuex'

export default createStore({
  state: {
    cartlist: JSON.parse(localStorage.getItem('cart') || '[]')
  },
  mutations: {
    ADD_CART(state, item) {
      if(state.cartlist.filter(f=>f.title === item.title).length>0) {
        state.cartlist = state.cartlist.map(m=>{
          m.num += item.num
          return m
        })
      } else {
        state.cartlist.push(item)
      }
      localStorage.setItem('cart', JSON.stringify(state.cartlist))
    },
    DEL_CART(state, item) {
      state.cartlist = state.cartlist.filter(f=>f.title !== item.title)
      localStorage.setItem('cart', JSON.stringify(state.cartlist))
    },
    CLEAR_CART(state, item) {
      state.cartlist = []
      localStorage.setItem('cart', JSON.stringify(state.cartlist))
    },
  },
  actions: {
  },
})
