<template>
  <div class="cart-list__products">
    <div class="title">Товары в корзине</div>
    <div class="cart-list__products-list">
      <vCartListProductsItem
        v-for="(item, index) in cart"
        :key="item.id"
        :item="item"
        :index="index"
        :price="item.price"
        :count="item.count"
        :name="item.name"
      />
    </div>
    <div class="checkout">
      <div class="title">Оформить заказ</div>
      <vCartListProductsForm/>
    </div>
  </div>
</template>

<script>
import vCartListProductsItem from "@/components/v-cart/v-cart-list-products-item";
import vCartListProductsForm from "@/components/v-cart/v-cart-list-products-form";
import { mapGetters } from "vuex";
export default {
  components: {
    vCartListProductsItem,
    vCartListProductsForm,
  },
  computed: {
    ...mapGetters("products", { cart: "getCart" }),
  },
};
</script>

<style lang="scss" scoped>
.cart-list__products {
  .title {
    margin-top: 24px;
    @include text(18px, 400, $grey);
  }
  &-list {
    margin-top: 16px;
    height: 400px;
    overflow: auto;
    padding: 10px;
  }
}
</style>