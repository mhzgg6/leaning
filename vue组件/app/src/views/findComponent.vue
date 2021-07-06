<template>
  <div class="find-com">
    寻找组件
    <test-c></test-c>
    <test-d></test-d>
  </div>
</template>

<script>
import TestC from "../components/TestC.vue"
import TestD from "../components/TestD.vue"
// import { findComponentDownward } from "../utils/assist"

export default {
  name: 'componentA',
  props: {},
  components: { TestC, TestD },
  data() {
    return {

    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    // const tmp = findComponentDownward(this, 'TestD');
    // console.log(tmp);
  },
  methods: {},
};
</script>