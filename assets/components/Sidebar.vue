<template>
  <div
    id="SideBar"
    :style="{height: `${height-70}px` }">
    <div class="containerMd">
      <div v-html="content"/>
    </div>
  </div>
</template>

<script>
import content from '~/assets/markdown/menu.md';

export default {
  props: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },
  computed: {
    content() {
      return content;
    }
  }
};
</script>

<style>
@import '~/assets/css/SideBar.css';
</style>
