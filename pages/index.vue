<template>
  <vMain />
</template>

<script>
import vMain from '@/components/v-main'
import {mapActions,mapMutations} from 'vuex'
export default {
  components:{
    vMain
  },
  methods:{
    ...mapActions('products',['GET_PRODUCTS']),

  },
  created(){
    this.GET_PRODUCTS(1)

  }
  
}
</script>

<style>
</style>
