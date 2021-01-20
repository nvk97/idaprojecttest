<template>
  <div class="checkout-form">
    <input type="text" v-model="contact.name" class="name" placeholder="Ваше имя" />
    <input type="text" v-model="contact.phone" v-facade="'+7(###)###-##-##'" class="phone" name="phone" placeholder="Телефон" />
    <input type="text" v-model="contact.address" class="address" placeholder="Адрес" />
    <button class="submit-btn" @click="submit">Отправить</button>
    <div class="error-message" v-if="error">Заполните пожалуйста все поля!</div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import {mapMutations} from 'vuex'
export default {
  directives: { mask },
  data(){
    return{
      contact:{
        name:'',
        phone:'',
        address:''
      },
      error:false
    }
  },
  methods:{
    ...mapMutations('products',{clear:'SUCCESS_POST'}),
    submit(){
      if(!!this.contact.name&!!this.contact.phone&!!this.contact.address){
        this.$nuxt.$emit('success-message')
        this.clear()
      }else{
        this.error=true
        setTimeout(()=>this.error=false,2000 )
      }
    }
  }
  
};
</script>
<style lang="scss" scoped>
.checkout-form {
  margin-top: 16px;
  input {
    @include text(16px, 400, $black);
    padding: 14px;
    width: 364px;
    outline: none;
    border: none;
    background: #f8f8f8;
    border-radius: 8px;
    height: 50px;
    margin-bottom: 16px;
    &:focus {
      &::placeholder {
        opacity: 0;
      }
    }
  }
  .submit-btn {
    cursor: pointer;
    outline: none;
    border: none;
    height: 50px;
    width: 364px;
    background: $black;
    border-radius: 8px;
    color: #fff;
    transition: background 0.2s;
    &:hover {
      background: $grey;
    }
  }
  .error-message{
    margin-top: 5px;
    @include text(12px,400px,red)
  }
}
</style>