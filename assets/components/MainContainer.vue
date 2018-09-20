<template>
  <div
    id="MainContainer"
    :style="{ width: `${width-270}px`, height: `${height-70}px`}">
    <div class="container">
      <div v-html="content" />
    </div>
  </div>
</template>


<script>
import content from '~/assets/markdown/content.md';

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
@import '~/assets/css/MainContainer.css';
</style>
