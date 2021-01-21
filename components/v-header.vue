<template>
  <header class="header">
    <div class="container">
      <vHeaderLogo />
      <vHeaderBasket />
    </div>
  </header>
</template>

<script>
import vHeaderLogo from "@/components/v-header/v-header-logo";
import vHeaderBasket from "@/components/v-header/v-header-basket";
export default {
  components: {
    vHeaderLogo,
    vHeaderBasket,
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 66px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 0px 0px 8px 8px;
  .container {
      height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>