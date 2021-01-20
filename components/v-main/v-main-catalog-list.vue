<template>
    <div class="catalog-list">
        <div class="catalog-list__item active">Рюкзаки</div>
        <div class="catalog-list__item">Футболки</div>
        <div class="catalog-list__item">Рубашки</div>
    </div>
</template>

<style lang="scss" scoped>
.catalog-list{
    margin-top: 24px;
    &__item{
        margin-bottom: 16px;
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

