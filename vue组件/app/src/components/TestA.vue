<template>
  <div class="wrapper">
    {{name}}
  </div>
</template>

<script>
export default {
  inject: ['name'],
  props: {},
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    console.log(this.$parent)
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.wrapper{}
</style>