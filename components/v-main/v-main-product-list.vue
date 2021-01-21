<template>
  <div class="product-list">
    <vMainProductsItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import vMainProductsItem from "@/components/v-main/v-main-product-item";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("products", { products: "getProducts" }),
  },
  components: {
    vMainProductsItem,
  },
};
</script>

<style lang="scss" scoped>
.product-list {
  margin-top: 26px;
  display: flex;
  flex-wrap: wrap;
  @include sm-mobile {
    justify-content: space-between;
  }
  @include esm-mobile {
    justify-content: center;
  }
}
</style>