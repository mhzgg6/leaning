<template>
  <div class="test-b">
    <h1>test B</h1>
  </div>
</template>

<script>
export default {
  name: 'TestB',
  props: {},
  components: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  created() {
    this.$on('on-message', this.showMessage);
  },
  mounted() {
    
  },
  methods: {
    showMessage(text) {
      window.alert(text);
    },
    handleClick() {

    }
  },
};
</script>
<style lang="less" scoped>
.wrapper{}
</style>