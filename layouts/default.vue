<template>
  <div>
    <vHeader/>
    <vCart/>
    <Nuxt />
  </div>
</template>


<script>
import vHeader from '@/components/v-header'
import vCart from '@/components/v-cart'
export default {
  components:{
    vHeader,
    vCart
  }
}
</script>

<style>

</style>
