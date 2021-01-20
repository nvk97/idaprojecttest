<template>
    <NuxtLink to="/" class="header__logo">TestList</NuxtLink>
</template>

<style lang="scss" scoped>
.header__logo{
    cursor: pointer;
    text-decoration: none;
    outline: none;
    @include text(22px,700,$grey)
}
</style>