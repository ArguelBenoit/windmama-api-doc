
<template>
  <div>
    <Header />
    <SideBar v-bind="viewport" />
    <MainContainer v-bind="viewport" />
  </div>
</template>

<script>
import SideBar from '~/assets/components/SideBar.vue';
import Header from '~/assets/components/Header.vue';
import MainContainer from '~/assets/components/MainContainer.vue';

export default {
  components: {
    Header,
    SideBar,
    MainContainer
  },
  data() {
    return {
      viewport: {
        width: 0,
        height: 0
      }
    };
  },
  mounted() {
    this.updateViewport();
    window.addEventListener('resize', this.updateViewport);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateViewport);
  },
  methods: {
    updateViewport() {
      this.viewport = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    }
  }
};
</script>

<style>
@import '~/assets/css/skeleton.css';
@import '~/assets/css/index.css';
</style>
