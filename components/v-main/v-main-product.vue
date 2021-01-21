<template>
    <section class="product">
        <vMainProductSort/>
        <vMainProductList/>
    </section>
</template>
<script>
import vMainProductSort from '@/components/v-main/v-main-product-sort'
import vMainProductList from '@/components/v-main/v-main-product-list'
export default {
    components:{
        vMainProductSort,
        vMainProductList
    }
}
</script>
<style lang="scss" scoped>
.product{
margin-left: 30px;
@include sm-mobile {
    margin-left: 0;
  }
  @include esm-mobile {
    margin-left: 0;
  }
}
</style>