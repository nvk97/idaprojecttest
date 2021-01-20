<template>
  <div class="product-sort">
    <div class="product-sort__title">
      Сортировать по:<span @click="dropdown = !dropdown"> {{sortOf}}</span>
    </div>
    <div class="product-sort__dropdown" :class="{ active: dropdown }">
      <div
        class="product-sort__dropdown__item"
        v-for="item in sortOfList"
        :key="item"
        :item="item"
        @click="setSort(item)"
      >
        По {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
  data() {
    return {
      sortOf: "цене",
      sortOfList: {
        price: "цене",
        popular: "популярности",
      },
      dropdown: false,
    };
  },
  methods: {
      ...mapMutations('products',['SORT_PRODUCTS_BY_PRICE','SORT_PRODUCTS_BY_RATING']),
      setSort(item){
          this.sortOf = item
          if(item=='цене'){
            this.SORT_PRODUCTS_BY_PRICE()
          }else{
            this.SORT_PRODUCTS_BY_RATING()
          }
          this.dropdown = false
      }
  },
};
</script>

<style lang="scss" scoped>
.product-sort {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 16px;
  &__title {
    @include text(16px, 400, $black);
    cursor: pointer;
    span {
      color: $grey;
    }
  }
  &__dropdown {
    opacity: 0;
    display: none;
    z-index: 50;
    margin-top: 20px;
    position: fixed;
    width: 160px;
    height: 68px;
    background: #ffffff;;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: 0.2s;
    &.active {
      opacity: 1;
      display: block;
    }
    &__item {
      @include text(14px, 400, $grey-light);
      line-height: 26px;
      padding-left:12px;
      &:nth-child(1){
          margin-top: 8px;
      }
      cursor: pointer;
      &:hover{
          background-color:$grey-extra-light;
          color:$black
      }
    }
  }
}
</style>