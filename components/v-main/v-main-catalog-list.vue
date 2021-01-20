<template>
    <div class="catalog-list">
        <NuxtLink :to="`/category/${category.id}`" class="catalog-list__item"  v-for="category in categories" :key="category.id" :class="{active:category.id===active}" >{{category.name}}</NuxtLink>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
export default {

    methods:{
        ...mapActions('products',{getCategories:'GET_CATEGORIES'})
    },
    computed:{
        ...mapGetters('products',{categories:'getCategories',active:'getActiveCategory'})
    },
    created(){
        this.getCategories()
    }
}
</script>
<style lang="scss" scoped>
.catalog-list{
    width: 153px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    &__item{
        margin-bottom: 16px;
        text-decoration: none;
        @include text(20px,400,$grey-light);
        &:hover{
            @include text(20px,400,$grey)
        }
        cursor: pointer;
    &.active{
        @include text(20px,400,$black)
    }
    }
}
</style>

