<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <render-c @click.native="nativeClick" @on-click-button="clickButton"></render-c> -->
    <router-view/>
  </div>
</template>

<script>
// import renderC from "./components/render/index.vue"

export default {
  name: 'app',
  components: {
    // renderC
  },
  methods: {
    nativeClick() {
      console.log('这是组件外部click.native触发的事件，第二个组件被点击了')
    },
    clickButton() {
      console.log('这是组件外部触发的【emit】事件，第二个组件被点击了')
    }
  }
}
</script>

<style lang="less">

</style>
