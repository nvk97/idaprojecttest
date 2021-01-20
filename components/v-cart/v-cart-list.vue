<template>
  <div class="cart__list">
    <div class="wrapper">
      <div class="title">Корзина</div>
      <div class="close" @click="$nuxt.$emit('close-cart')">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
    <div class="success-message" v-if="success">
      <img :src="require('@/static/img/ok-hand.png')" alt="" />
      <div class="success-title">Заявка успешно отправлена</div>
      <div class="success-subtitle">Вскоре наш менеджер свяжется с Вами</div>
    </div>
    <div class="empty" v-if="!state & !success">
      <div class="empty-message">Пока что вы ничего не добавили в корзину.</div>
      <button class="toShop" @click="$nuxt.$emit('close-cart')">
        Перейти к выбору
      </button>
    </div>
    <vCartListProducts v-if="state & !success" />
  </div>
</template>

<script>
import vCartListProducts from "@/components/v-cart/v-cart-list-products";
import { mapGetters } from "vuex";
export default {
  components: {
    vCartListProducts,
  },
  data() {
    return {
      success: false,
    };
  },
  computed: {
    ...mapGetters("products", { cart: "getCart" }),
    state() {
      return !!this.cart.length;
    },
  },
  created() {
    this.$nuxt.$on("success-message", () => {
      this.status = true;
      setTimeout(()=>this.status=false,5000)
    });
  },
};
</script>

<style lang="scss" scoped>
.success-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 600px;
  margin: auto;
  img {
    display: block;
    margin: 50px auto 0;
  }
  .success{
    &-title{
      @include text(24px,700,#000000);
      margin: 10px auto;
    }
    &-subtitle{
      @include text(16px,400,$grey);
      margin: 0 auto;
    }
  }
}
.wrapper {
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .title {
    @include text(32px, 700, $black);
  }
  .close {
    cursor: pointer;
  }
}
.empty {
  &-message {
    margin-top: 24px;
    @include text(22px, 400, $black);
  }
  .toShop {
    cursor: pointer;
    border: none;
    outline: none;
    margin-top: 24px;
    height: 50px;
    width: 100%;
    color: #fff;
    background: #1f1f1f;
    border-radius: 8px;
  }
}
</style>