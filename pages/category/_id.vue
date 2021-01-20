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
    var _id = this.$route.params.id;
    this.GET_PRODUCTS(_id)
  }
  
}
</script>

<style>
</style>