<template>
    <main class='container'>
        <vMainCatalog/>
        <vMainProduct/>
    </main>
</template>

<script>
import vMainProduct from '@/components/v-main/v-main-product'
import vMainCatalog from '@/components/v-main/v-main-catalog'
export default {
    components:{
        vMainCatalog,
        vMainProduct
    }
}
</script>
<style lang="scss" scoped>
main{
    display: flex;
    margin-top: 32px;
}
</style>