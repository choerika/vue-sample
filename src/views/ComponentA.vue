<template>
    <div>
      <h1>Componente A</h1>
      <i class="ico-avatar"></i>
      <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello!'
    }
  }
}
</script>

<style lang="scss">
@import '../assets/sprite/sprite.scss';

.ico-avatar {
  display: block;
  @include sprite($house);
}
</style>
