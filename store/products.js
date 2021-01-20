export const state = () => ({
  products: [],
  cart: [],
  count:0

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
  }

}

export const mutations = {
  SET_PRODUCTS_TO_STATE(state, products) {
    state.products = products
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
      let index = state.cart.findIndex(item=>item.id===payload.id)
      state.cart[index].count++
      let buf = state.cart //Не смог придумать ничего, что бы поля объекта в массиве были реактивны
      state.cart=[]
      state.cart = buf
      state.count = state.cart.reduce((total,val)=>{total+=val.count;return total},0)
    }else{
      payload.count=1
      state.cart.push(payload)
      state.count++
    }



    

  },
  DELETE_AT_CART(state,index){
    state.count-=state.cart[index].count
    state.cart.splice(index,1)
  },
  SUCCESS_POST(state){
    state.cart = []
  }

}

export const getters = {
  getProducts(state) {
    return state.products
  },
  getCart(state) {
    return state.cart
  },
  getCount(state){
    return state.count
  }
}
