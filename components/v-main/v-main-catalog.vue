<template>
    <aside class="catalog">
        <div class="catalog__title">Каталог</div>
        <vMainCatalogList/>
    </aside>
</template>
<script>
import vMainCatalogList from '@/components/v-main/v-main-catalog-list'
export default {
    components:{
        vMainCatalogList
    }
}
</script>
<style lang="scss" scoped>
.catalog{
    width:200px;
    position: sticky;
    top:10px;
    height: 500px;
    &__title{
        @include text(32px,700,$black)
    }
    @include sm-mobile{
        display: none;
    }
    @include esm-mobile{
        display: none;
    }
}
</style>

