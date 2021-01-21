<template>
  <div class="cart" :class="{ active: status }">
    <div class="cart__blur"></div>
    <cartList/>
  </div>
</template>

<script>
import cartList from '@/components/v-cart/v-cart-list'
export default {
  data() {
    return {
      status: false,
    };
  },
  components:{
    cartList
  },
  created() {
    this.$nuxt.$on("open-cart", () => {
      this.status = true;
    });
    this.$nuxt.$on("close-cart",()=>{
        this.status = false
    })
  },
};
</script>


<style lang="scss" scoped>
.cart {
  position: fixed;
  height: 100vh;
  width: 100vw;
  opacity: 0;
  top: 0;
  display: flex;
  z-index: -1;
  transition: 0.5s;
  &__blur {
    height: 100vh;
    width: 100vw;
    background-color: #fff;
    opacity: 0.8;
  }
  &__list {
    position: fixed;
    width: 460px;
    padding: 52px 48px 0 ;
    right: -20vw;
    height: 100vh;
    flex-basis: 20%;
    @include cart;
    transition: 0.5s;
  }
  &.active {
    opacity: 1;
    z-index: 50;
    .cart__list {
      right:0
    }
  }
  @include sm-mobile{
    &__list {
      width: 100vw;
      padding: 20px 20px 0 ;
      flex-basis: 100%;
    }
  }
  @include esm-mobile{
    &__list {
      width: 100vw;
      padding: 20px 20px 0 ;
      flex-basis: 100%;
    }
  }
}
</style>