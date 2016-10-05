<template>
    <div>
      <h1>Componente B</h1>
      <p class="ico-book"></p>
    </div>
</template>

<style lang="scss">
@import '../assets/sprite/sprite.scss';

.ico-book {
  display: block;
  @include sprite($avatar-1);
}
</style>
