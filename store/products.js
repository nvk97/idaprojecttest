import * as Cookie from 'js-cookie'
import Vue from 'vue'
export const state = () => ({
  products: [],
  cart: [],
  categories: [],
  count: 0,
  activeCategory: 0

})

export const actions = {
  async GET_PRODUCTS({
    commit
  }, category) {
    try {
      const products = await this.$axios.$get(`api/product?category=${category}`)
      commit('SET_PRODUCTS_TO_STATE', products)
      commit('SORT_PRODUCTS_BY_PRICE')
    } catch (e) {
      console.log(e)
    }
  },
  async GET_CATEGORIES({
    commit
  }) {
    try {
      const cat = await this.$axios.$get(`api/product-category`)
      commit('SET_CATEGORIES_TO_STATE', cat)
    } catch (e) {
      console.log(e)
    }
  },
  GET_CART({commit}){
    commit('GET_CART_FROM_COOKIES')
  }

}

export const mutations = {
  SET_CATEGORIES_TO_STATE(state, payload) {
    state.categories = payload
  },
  SET_PRODUCTS_TO_STATE(state, payload) {
    state.products = payload
    state.activeCategory = payload[0].category
  },
  SORT_PRODUCTS_BY_PRICE(state) {
    state.products.sort((a, b) => a.price - b.price)
  },
  SORT_PRODUCTS_BY_RATING(state) {
    state.products.sort((a, b) => b.rating - a.rating)
  },
  ADD_TO_CART(state, payload) {
    let id = payload.id
    let res = state.cart.filter((item) => {
      return item.id == id
    })
    if (!!res.length) {
      let index = state.cart.findIndex(item => item.id === payload.id)
     
      // let buf = state.cart //Не смог придумать ничего, что бы поля объекта в массиве были реактивны
      // state.cart = []
      // state.cart = buf 
      let buf = state.cart[index] //Принципиальное ли различие в итоге?Наверное да. Но решение мне все равно кажется не самым элегантным
      buf.count++
      Vue.set(state.cart,index,buf)
      state.count = state.cart.reduce((total, val) => {
        total += val.count;
        return total
      }, 0)
      Cookie.set('cart',JSON.stringify(state.cart))
    } else {
      payload.count = 1
      state.cart.push(payload)
      Cookie.set('cart', JSON.stringify(state.cart))
      state.count++
    }
  },
  DELETE_AT_CART(state, index) {
    state.count -= state.cart[index].count
    state.cart.splice(index, 1)
    Cookie.set('cart',JSON.stringify(state.cart))
  },
  SUCCESS_POST(state) {
    state.cart = []
    state.count = 0
    Cookie.set('cart',JSON.stringify(state.cart))
  },
  GET_CART_FROM_COOKIES(state){
    if (!!Cookie.get('cart')){
      state.cart = JSON.parse(Cookie.get('cart'))
      state.count = JSON.parse(Cookie.get('cart')).reduce((total, val) => {
        total += val.count;
        return total
      }, 0)
    }
  }

}

export const getters = {
  getProducts(state) {
    return state.products
  },
  getCart(state) {
    return state.cart
  },
  getCount(state) {
    return state.count
  },
  getCategories(state) {
    return state.categories
  },
  getActiveCategory(state) {
    return state.activeCategory
  }
}
